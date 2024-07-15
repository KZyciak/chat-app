"use client";
import { CustomInput } from "./CustomInput";
import { CustomButton } from "./CustomButton";
import { useRef } from "react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { AuthAction } from "@/actions/authAction";
import { useRouter } from "next/navigation";

export const AuthForm = ({ type }: AuthFormProps) => {
  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleFormSubmit = async (prevState: StateForm, formData: FormData) => {
    const response = await AuthAction(formData, type);
    if (response?.message === "success") {
      router.push("/");
    }
    return {
      ...prevState,
      message: response?.message,
      errors: response?.issues,
    };
  };

  const [state, formAction] = useFormState(handleFormSubmit, {
    message: "",
    errors: [],
  } as StateForm);

  return (
    <div className="w-full">
      <h2 className="text-5xl font-semibold text-main-600">
        {type === "sign-up" ? "Create an account" : "Login"}
      </h2>
      <p className="mb-10 mt-4 text-lg text-font_dimmed">
        {type === "sign-up"
          ? "Sign up to get started"
          : "Welcome back! Please enter the details."}
      </p>
      <div className="lg:w-[450px]">
        <form
          className="flex flex-col gap-5"
          ref={ref}
          action={(formData) => {
            formAction(formData);
            ref.current?.reset();
          }}
        >
          {type === "sign-up" && (
            <>
              <CustomInput
                label="Username"
                name="username"
                type="text"
                placeholder="Your username"
                errorMessage={
                  state.errors?.find((error) => error.path[0] === "username")
                    ?.message
                }
              />
              <CustomInput label="Avatar" name="avatar" type="file" />
            </>
          )}
          <CustomInput
            label="Email"
            name="email"
            type="email"
            placeholder="joedog@gmail.com"
            errorMessage={
              state.errors?.find((error) => error.path[0] === "email")?.message
            }
          />
          <CustomInput
            label="Password"
            name="password"
            type="password"
            placeholder="Your password"
            errorMessage={
              state.errors?.find((error) => error.path[0] === "password")
                ?.message
            }
          />

          <CustomButton type="submit">
            {type === "sign-up" ? "Sign Up" : "Login"}
          </CustomButton>
        </form>
      </div>
      <p className="mt-5 text-center text-sm">
        {type === "sign-up"
          ? "Already have an account? "
          : "Don't have an account? "}
        <Link
          href={type === "sign-up" ? "/sign-in" : "/sign-up"}
          className="text-main-600 underline hover:text-main-700"
        >
          {type === "sign-up" ? "Login" : "Sign Up"}
        </Link>
      </p>
    </div>
  );
};
