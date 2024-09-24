import LinkLists from "./LinkList";

const data1 = [
  { id: 1, text: "About us" },
  { id: 2, text: "Blog" },
  { id: 3, text: "Contact us" },
  { id: 4, text: "Pricing" },
  { id: 5, text: "Testimonials" },
];
const data2 = [
    { id: 1, text: "Help center" },
    { id: 2, text: "Terms of service" },
    { id: 3, text: "Legal" },
    { id: 4, text: "Privacy policy" },
    { id: 5, text: "Status" },
]

export default function Links() {
  return (
    <div className="flex gap-x-5 ">
      <LinkLists array={data1} title={"Company"}/>
      <LinkLists array={data2} title={"Support"}/>
      <div className="flex flex-col gap-y-4">
        <h2 className="font-semibold text-sm text-white">Stay up to date</h2>
        <div className="flex">
            <input className="bg-white/20 outline-none w-40 px-2 placeholder:text-[#D9DBE1] text-[#D9DBE1] text-[12px] py-1 rounded-s-md" type="email" placeholder="Your email address"/>
            <img className="bg-white/20 pr-2 rounded-e-md" src="./src/assets/footer/send.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
