import Cards from "./Cards";
import Title, { text } from "./Title";

export default function Community(){
    return <div className="grid gap-y-3">
    <Title select={text.community} />
    {/* three cards */}
    <Cards />
  </div>
}