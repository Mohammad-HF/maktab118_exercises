import { useState } from "react";

interface IClickButton{
  add : ()=>void;
  remove : ()=>void
}
export const Button: React.FC<IClickButton> = ({add,remove}) => {
  const [text, setText] = useState<string[]>([
    "Add to Card",
    "Remove from Card",
  ]);
  const changeButton: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (text[0] === "Add to Card") {
      setText(["Remove from Card", "Add to Card"]);
      add()
    } else {setText(["Add to Card", "Remove from Card"])
      remove()
    }
  };
  return (
    <button
      className={`px-4 py-2 rounded-md my-2 text-white ${
        text[0] === "Add to Card" ? "bg-blue-500" : "bg-red-500"
      }`}
      onClick={changeButton}
    >
      {text[0]}
    </button>
  );
};
