"use client"
import { useState } from "react";

interface IClickButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  // add: () => void;
  // remove: () => void;
  idProduct: number;
}
export const Button: React.FC<IClickButton> = ({

  idProduct,
  className,
  ...props
}) => {
  const [text, setText] = useState<string[]>([
    "Add to Card",
    "Remove from Card",
  ]);
  const changeButton: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (text[0] === "Add to Card") {
      setText(["Remove from Card", "Add to Card"]);
    } else setText(["Add to Card", "Remove from Card"]);
  };
  return (
    <button
    {...props}
      className={`px-4 py-2 rounded-md my-2 text-white ${
        text[0] === "Add to Card" ? "bg-blue-500" : "bg-red-500"
      }`}
      onClick={changeButton}
    >
      {text[0]}
    </button>
  );
};
