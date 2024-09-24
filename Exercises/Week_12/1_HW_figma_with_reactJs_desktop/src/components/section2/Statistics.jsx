import { club } from "../../assets/section2/statistics/club";
import { event } from "../../assets/section2/statistics/Event";
import { member } from "../../assets/section2/statistics/Member";
import { payment } from "../../assets/section2/statistics/Payment";

const data = [
  { id: 0, img: member, number: "2,245,341", text: "member" },
  { id: 1, img: club, number: "46,328", text: "Clubs" },
  { id: 2, img: event, number: "828,867", text: "Event Bookings" },
  { id: 3, img: payment, number: "1,926,436", text: "Payments" },
];

export default function Statistics() {
  let StatisEl = data.map((obj) => {
    return (
      <div className="flex w-[177px] gap-x-3 items-center" key={obj.id}>
        {obj.img}
        <h3 className="font-bold text-xl text-grayApp">
          {obj.number}
          <span className="text- font-normal text-xs block text-grayPApp">{obj.text}</span>
        </h3>
      </div>
    );
  });
  return (
    <div className="self-center">
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-7 ">{StatisEl}</div>
    </div>
  );
}
