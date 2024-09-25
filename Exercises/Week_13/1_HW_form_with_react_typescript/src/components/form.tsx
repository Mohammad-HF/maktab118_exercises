import { useState } from "react";
import Input from "./Input";
import FileInput from "./FileInput";
import Button from "./Button";

export default function Form(): JSX.Element {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const [submitForm, setSubmitForm] = useState<ICollectInput>({
    company: "",
    business: "",
    address: "",
    postalCode: "",
    name: "",
    phone: "",
    linkedin: "",
    email: "",
    idea: "",
    file: "",
  });
  const setAllValues = (input: Inputs, value: string) => {
    setSubmitForm({ ...submitForm, [input]: value });
    let valuesArray: string[] = Object.values(submitForm);
    // two solution
    valuesArray = valuesArray.filter((x) => x !== "");
    if (
      (value !== "" && valuesArray.length === 9 && submitForm[input] === "") ||
      (valuesArray.length === 10 && value !== "")
    ) {
      setDisableButton(false);
    } else setDisableButton(true);
    // one solution(not work)
    // setDisableButton(valuesArray.includes(""))
    // console.log(valuesArray);
  };
  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(submitForm);
  };

  const data: IData[] = [
    {
      id: 1,
      placeholder: "Your Company Name",
      type: "text",
      validator: (input) => {
        return input.length >= 3
          ? undefined
          : "your company name should be 3 char or more";
      },
      collectValue: (input) => setAllValues("company", input),
    },
    {
      id: 2,
      placeholder: "Nature of Business",
      type: "text",
      validator: (input) => {
        return input.length >= 3
          ? undefined
          : "your Nature of Business should be 3 char or more";
      },
      collectValue: (input) => setAllValues("business", input),
    },
    {
      id: 3,
      placeholder: "Adress",
      type: "address",
      maxW: "max-w-[245px]",
      validator: (input) => {
        return input.length >= 3
          ? undefined
          : "your address should be 3 char or more";
      },
      collectValue: (input) => setAllValues("address", input),
    },
    {
      id: 4,
      placeholder: "Postcode",
      type: "number",
      maxW: "max-w-[133px]",
      validator: (input) => {
        return input.length >= 10 ? undefined : "postal code should be 10 char";
      },
      collectValue: (input) => setAllValues("postalCode", input),
    },
    {
      id: 5,
      placeholder: "Contact name",
      type: "text",
      validator: (input) => {
        return input.length >= 3
          ? undefined
          : "your name should be 3 char or more";
      },
      collectValue: (input) => setAllValues("name", input),
    },
    {
      id: 6,
      placeholder: "Contact Phone",
      type: "number",
      validator: (input) => {
        return /(09)[0-9]{9}/.test(input) && input.length === 11
          ? undefined
          : "phone number is not true example : 09120000000";
      },
      collectValue: (input) => setAllValues("phone", input),
    },
    {
      id: 7,
      placeholder: "Linkdin",
      type: "text",
      validator: (input) => {
        let address: string | undefined = input.split(
          "https://www.linkedin.com/"
        )[1];
        return address?.length >= 3
          ? undefined
          : "example: https://www.linkedin.com/your address";
      },
      collectValue: (input) => setAllValues("linkedin", input),
    },
    {
      id: 8,
      placeholder: "Email",
      type: "email",
      validator: (input) => {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          input
        )
          ? undefined
          : "your email is not true. example: example@gmail.com";
      },
      collectValue: (input) => setAllValues("email", input),
    },
    {
      id: 9,
      placeholder: "Let's talk about your idea",
      type: "text",
      validator: (input) => {
        return input.length >= 10
          ? undefined
          : "your idea should be 10 char or more";
      },
      collectValue: (input) => setAllValues("idea", input),
    },
  ];

  const inputEl = data.map((obj) => {
    return <Input key={obj.id} info={obj} />;
  });
  return (
    <form
      className="flex flex-wrap gap-x-3 max-w-[390px] pb-4 "
      onSubmit={onSubmitHandler}
    >
      {inputEl}
      <FileInput collectValue={(input) => setAllValues("file", input)} />
      <Button disableChange={disableButton}>submit</Button>
    </form>
  );
}
