export const CustomInput = (props: CustomInputProps) => {
  return (
    <div>
      <label className="mb-2 block text-sm text-font_dimmed">
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className="mt-1 block w-full rounded-md border border-element_border bg-transparent px-3 py-2 text-sm file:mr-4 file:cursor-pointer file:rounded-md file:border-0 file:bg-transparent file:px-2 file:py-1 file:text-xs file:text-font hover:bg-element_bg focus:border-main-400 focus:outline-none focus:ring-main-400"
      />
      {props.errorMessage && (
        <p className="mt-1 text-xs text-red-500">{props.errorMessage}</p>
      )}
    </div>
  );
};
