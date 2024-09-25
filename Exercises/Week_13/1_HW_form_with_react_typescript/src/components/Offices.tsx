import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function Offices() {
    const [input , setInput] = useState<string>("");
    const saveInput = (input : string)=>{
        setInput(input)
    }
    const data : IData = {
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
          collectValue : (input)=> saveInput(input)
    }
  return (
    <div className="flex flex-col gap-y-12 max-w-[267px] max-md:w-[300px] max-md:max-w-full">
      <div className="flex flex-col gap-y-4 text-xs text-grayPApp">
        <h2 className="font-bold text-black/65 text-sm">Offices</h2>
        <p>
          United States{" "}
          <span className="block">500 5th Avenue Suite 400,NY 10110</span>
        </p>
        <p>
          United Kingdom <span className="block">High St, Bromley BR1 1DN</span>
        </p>
        <p>
          France <span>80 avenue des Terroirs de Freance, Paris</span>
        </p>
      </div>
      <div className="flex flex-col gap-y-4">
      <h2 className="font-bold text-black/65 text-sm">For Quick Inquiries</h2>
      <p className="text-xs"><img className="size-4 inline-block mr-1" src="./src/assets/uk.svg" alt="" /> +44 7777777777</p>
      <p className="text-xs"><img className="size-4 inline-block mr-1" src="./src/assets/us.svg" alt="" /> +1 3333333333</p>
      </div>
      <div>
        <h2>Would you like to join our newsietter?</h2>
        <div className="flex gap-x-4 items-start justify-start pt-5">
          <Input info={data}/>
            <div className="shrink-0 w-fit mt-1">
            <Button data={input} disableChange={input === "" ? true : false}><img className="size-3 inline-block " src="./src/assets/check.svg" alt="" /></Button>

            </div>
        </div>
      </div>
    </div>
  );
}
