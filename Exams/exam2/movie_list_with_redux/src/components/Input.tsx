interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  name: string;
  error?: string;
}
export const Input: React.FC<IInput> = ({ name, label, error, ...props }) => {
  return (
    <div className="flex flex-col w-1/2 gap-x-2 text-white">
      <label className="min-w-24" htmlFor={label}>{label}</label>
      <input 
      name={name}
      {...props}
      type="text" className="rounded-md text-black px-2" />
    {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
