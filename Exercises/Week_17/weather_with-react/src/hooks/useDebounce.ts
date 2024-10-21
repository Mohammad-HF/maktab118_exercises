import { useEffect, useRef, useState } from "react";

export const useDebounce = (input: string) => {
  const [value, setValue] = useState<string>("");
  const elCounter = useRef<number>();
  useEffect(() => {
    if (elCounter.current) clearTimeout(elCounter.current);
    elCounter.current = setTimeout(() => {
      setValue(input);
    }, 1000);
  }, [input]);

  return [value];
};
