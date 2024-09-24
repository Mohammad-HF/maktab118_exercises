const data = [
  {
    id : 1,
    src: "./src/assets/section1/bottom/Icon1.svg",
    title: "Membership Organisation",
    text: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    id: 2,
    src: "./src/assets/section1/bottom/Icon2.svg",
    title: "National Associations",
    text: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    id: 3,
    src: "./src/assets/section1/bottom/Icon3.svg",
    title: "Clubs And Groups",
    text: "Our membership management software provides full automation of membership renewals and payments",
  },
];
export default function Cards() {
  let cardsEl = data.map((card) => {
    return (
      <div className="flex flex-col gap-y-[6px] px-[22px] py-4 w-52 xl:w-80 " key={card.id}>
          <img className="w-1/3 self-center" src={`${card.src}`} alt="" />
        <h2 className="font-bold text-xl  text-grayApp text-center">{card.title}</h2>
        <p className="text-[10px]  text-grayPApp text-center">{card.text}</p>
      </div>
    );
  });
  return <div className="flex justify-between px-[100px]">{cardsEl}</div>;
}
