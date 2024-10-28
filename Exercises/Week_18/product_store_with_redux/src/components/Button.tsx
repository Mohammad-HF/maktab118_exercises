import { useAppSelector } from "../redux/hooks";
import { selectIdOfCard } from "../redux/selectors/selectIdOfCard";

interface IClickButton {
  add: () => void;
  remove: () => void;
  id: number;
}
export const Button: React.FC<IClickButton> = ({ add, remove, id }) => {
  const cardListId: number[] = useAppSelector(selectIdOfCard);
console.log("11",id);


  const changeButton: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (!cardListId.includes(id)) {
      add();
    } else remove();
  };
  return (
    <button
      className={`px-4 py-2 rounded-md my-2 text-white ${
        !cardListId.includes(id) ? "bg-blue-500" : "bg-red-500"
      }`}
      onClick={changeButton}
    >
    {!cardListId.includes(id) ?" Add to Card ": "Remove from Card"}
    </button>
  );
};
