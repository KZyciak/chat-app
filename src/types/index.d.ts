declare type SignUpFormData = {
  username: string;
  email: string;
  password: string;
};

declare type StateForm = {
  message: string | undefined;
  errors: ZodIssue[] | undefined;
};

declare type AuthFormProps = {
  type: "sign-up" | "sign-in";
};

declare type CustomButtonProps = {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
};

declare type CustomInputProps = {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  errorMessage?: string;
};
