import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { signInFormSchema } from "@/lib/utils";
import { auth } from "@/firebase/firebaseConfig";

export const handleSignIn = async (params: FormData) => {
  const validation = signInFormSchema.safeParse({
    email: params.get("email"),
    password: params.get("password"),
  });

  if (validation.success) {
    const { email, password } = validation.data;
    try {
      await setPersistence(auth, browserSessionPersistence);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      return { user, message: "success" };
    } catch (error) {
      console.log(error + "Error during sign in process");
    }
  } else {
    return {
      message: "error",
      issues: validation.error ? validation.error.issues : undefined,
    };
  }
};
