import RdCard from "./RdCard";
const data = [
  {
    id: 1,
    src: "./src/assets/section2/caring/pic1.svg",
    button: "Readmore",
    title: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    id: 2,
    src: "./src/assets/section2/caring/pic2.svg",
    button: "Readmore",
    title:
      "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    id: 3,
    src: "./src/assets/section2/caring/pic3.svg",
    button: "Readmore",
    title: "Revamping the Membership Model with Triathlon Australia",
  },
];
export default function CaringCards() {
  const caringEl = data.map((object) => <RdCard key={object.id} item={object}/>);
    return  <div className="flex justify-between px-[100px]">{caringEl}</div>;

}