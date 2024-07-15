export const CustomButton = (props: CustomButtonProps) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="rounded-md bg-main-600 px-4 py-2 text-sm font-semibold text-black hover:bg-main-700"
    >
      {props.children}
    </button>
  );
};
