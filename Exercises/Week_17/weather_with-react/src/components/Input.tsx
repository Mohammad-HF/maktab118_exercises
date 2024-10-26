import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { fetchLatAndLng } from "../apis/opencage.api";
import { IResult } from "../types/opencage";

export const Input: React.FC<{ cbData: (d: IResult[] | []) => void }> = ({
  cbData,
}) => {
  const [input, setInput] = useState<string>("");
  const [lastValue] = useDebounce(input);
  const [error, setError] = useState<boolean>(false);
  console.log(lastValue);
  
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };

  const response = async () => {
    try {
      
      const data = await fetchLatAndLng(lastValue);
      console.log(data.results);
      data.results.length === 0 ? setError(true) : setError(false);
      cbData(data.results);
    } catch (error) {
      setError(true)
      cbData([]);
    }
  };

  useEffect(() => {
    if (lastValue) response();
  }, [lastValue]);
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
      <p className={`text-red-500 pt-1 ${!error && "hidden"}`} >
        data is not available
      </p>
    </>
  );
};
