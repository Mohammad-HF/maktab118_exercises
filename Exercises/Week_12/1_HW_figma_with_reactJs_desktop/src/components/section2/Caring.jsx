import Title, { text } from "../section1/Title";
import CaringCards from "./CaringCards";

export default function Caring() {
  return (
    <div className="grid gap-y-3 min-w-[980px]">
      <Title select={text.caring} width={"w-[437px]"} />
      <CaringCards />
    </div>
  );
}
