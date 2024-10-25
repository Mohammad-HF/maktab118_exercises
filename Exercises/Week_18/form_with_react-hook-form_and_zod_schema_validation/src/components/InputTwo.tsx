interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error?: string;
  cases: string[];
}
export const InputTwo: React.FC<IInputProps> = ({
  label,
  error,
  cases,
  ...props
}) => {
  return (
    <div className="py-2 ">
      <label className="inline-block mr-3 min-w-32 font-semibold" >
        {label}
      </label>
      <div className="inline-flex flex-wrap items-baseline gap-x-10 border-b border-black sm:w-[calc(100%_-_140px)]">
      {cases.map((text , i) => {
        return (
          <div key={i} className="min-w-28">
            <input 
              {...props}
              type="radio"
              value={text}
              />{" "}
            <label>{text}</label>
          </div>
        );
      })}
      
      </div>
      {error && <p className="text-red-500 mt-1 ml-32">{error}</p>}
    </div>
  );
};
