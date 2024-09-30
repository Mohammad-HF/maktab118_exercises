import { useEffect, useState } from "react";
import Input from "./Input";

export default function Form() {
  const [allValues, setAllValues] = useState<IAllValues>({
    title: "",
    description: "",
    time: "",
  });
  const [disableSubmit, setDisableSubmit] = useState<boolean>(true);
  const setValue = (name: string, value: string) => {
    setAllValues({ ...allValues, [name]: value });
  };
  const [firstTimeLoading, setFirstTimeLoading] = useState<boolean>(true);
  const data: IData[] = [
    {
      id: 1,
      placeHolder: "Alarm title",
      type: "text",
      validator: (input) => {
        return input.length < 3 ? "title should be 3 char or more" : undefined;
      },
      collectValue: (input) => {
        setValue("title", input);
      },
    },
    {
      id: 2,
      type: "text",
      placeHolder: "Alarm Description",
      validator: (input) => {
        return input.length < 10
          ? "description should be 10 char or more"
          : undefined;
      },
      collectValue: (input) => {
        setValue("description", input);
      },
    },
    {
      id: 3,
      type: "time",
      placeHolder: "Alarm Time",
      validator: (input) => {
        const time = new Date();
        if (
          input === "" ||
          Number(input.split(":")[0]) < Number(time.getHours()) ||
          (Number(input.split(":")[0]) === Number(time.getHours()) &&
            Number(input.split(":")[1]) <= Number(time.getMinutes()))
        ) {
          return `time can't less than or equal to ${
            time.getHours().toString().padStart(2,"0") + ":" + time.getMinutes().toString().padStart(2,"0")
          }`;
        } else return undefined;
      },
      collectValue: (input) => {
        setValue("time", input);
      },
    },
  ];
 
  const inputsEl = data.map((item) => {
    return <Input key={item.id} {...item} />;
  });

  const onSubmitHandler : React.FormEventHandler<HTMLFormElement> = (e ) =>{
    e.preventDefault();
    if(data[2].validator(allValues["time"])) return alert(data[2].validator(allValues["time"]));
    
    
  }
  useEffect(() => {
    if (firstTimeLoading) {
      setFirstTimeLoading(false);
      return;
    }
    setDisableSubmit(Object.values(allValues).includes(""));
    console.log(allValues);
  }, [allValues]);
  return (
    <form className="flex flex-col gap-y-5 py-5 px-4 bg-skyBlueApp rounded-md" onSubmit={onSubmitHandler}>
      {inputsEl}
        <button
        type="submit"
          className="bg-blueApp_2 rounded-md px-10 py-2 mx-auto font-bold border-2 text-white shadow-blue-300/60 shadow-lg hover:bg-blueApp_2/50 hover:text-black disabled:hover:text-white disabled:hover:cursor-default disabled:bg-grayApp"
          disabled={disableSubmit}
        >
          Submit
        </button>
    </form>
  );
}
