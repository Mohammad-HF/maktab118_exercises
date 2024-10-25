interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error?: string;
  className? : string;
}
export const Input: React.FC<IInputProps> = ({ label, error,className, ...props }) => {
  return (
    <div className={`py-2 w-full ${className ? className + " md:w-[calc(50%_-_20px)]" : "" }  `}>
    <div className="w-full ">
      <label className={`inline-block ${className ? "mr-0 md:w-3/12" : "mr-3 md:w-[10%]"} min-w-22 font-semibold `}>
        {label}
      </label>
      <input
        {...props}
        className={`${
          !props.value
            ? ""
            : props.value && !error
            ? "focus:!border focus:!border-green-500 focus:rounded-md"
            : props.value && error && "!border !border-red-500 rounded-md"
        } border-b border-b-black border-t border-transparent focus:outline-none px-2 pt-1 min-w-52 w-full ${className ? "md:w-9/12" : "md:w-[88%]"}`}
      />
      {error && <p className="text-red-500 mt-1 ml-5 md:ml-32 ">{error}</p>}
    </div>
    </div>
    
  );
};
