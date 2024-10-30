interface IInput {
  label: string;
  name: string;
}
export const UserInfoInput: React.FC<IInput> = ({ label, name }) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="font-semibold text-sm md:text-base inline-block min-w-36"
      >
        {label} :{" "}
      </label>
      <input
        type="text"
        name={name}
        id={label}
        className="rounded-sm text-black px-2 "
      />
    </div>
  );
};
