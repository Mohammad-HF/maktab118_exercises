import Brands from "./Brands";
import Title, { text } from "./Title";

export default function Clients() {
  return (
    <div className="px-[100px] grid gap-y-3">
      <Title select={text.client} />
      <Brands />
    </div>
  );
}
