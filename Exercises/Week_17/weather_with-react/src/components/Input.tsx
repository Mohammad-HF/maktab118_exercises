import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export const Input: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [lastValue] = useDebounce(input);
  console.log(lastValue);
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <h2 className="text-2xl font-semibold text-blue-950">
        Search country for show weather
      </h2>
      <input
        value={input}
        onChange={changeHandler}
        type="text"
        className="focus:outline-blue-950 focus:outline-2 focus:outline rounded-md px-2 py-1 mt-2"
      />
    </>
  );
};
