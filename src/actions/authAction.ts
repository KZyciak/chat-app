import { toast } from "@/components/shadcn/use-toast";
import { handleSignUp } from "./createUser";
import { handleSignIn } from "./loginUser";
import { redirect } from "next/navigation";

export const AuthAction = async (
  formData: FormData,
  type: "sign-in" | "sign-up",
) => {
  const result =
    type === "sign-up"
      ? await handleSignUp(formData)
      : await handleSignIn(formData);
  if (result && result.message === "success") {
    toast({
      title: type === "sign-up" ? "Account created" : "Logged in",
      description: type === "sign-up" ? "You can now log in" : "Welcome back",
    });
  } else {
    toast({
      title: "Error",
      description: "An error occurred. Please try again.",
    });
  }
  return result;
};
