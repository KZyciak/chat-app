import { auth, db } from "@/firebase/firebaseConfig";
import { signUpFormSchema } from "@/lib/utils";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { uploadFile } from "./uploadFile";

export const handleSignUp = async (params: FormData) => {
  const validation = signUpFormSchema.safeParse({
    username: params.get("username"),
    avatar: params.get("avatar"),
    email: params.get("email"),
    password: params.get("password"),
  });

  if (validation.success) {
    const { username, email, password, avatar } = validation.data;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName: username });

      const imgUrl = await uploadFile(avatar as File);

      await setDoc(doc(db, "users", user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: user.uid,
        blocked: [],
      });
      await setDoc(doc(db, "userchats", user.uid), {
        chats: [],
      });
      return { user, message: "success" };
    } catch (error) {
      console.log(error + "Error during sign up process");
    }
  } else {
    return {
      message: "error",
      issues: validation.error ? validation.error.issues : undefined,
    };
  }
};
