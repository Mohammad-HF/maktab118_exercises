import Coffee from "../components/Coffee";
import { data } from "../data/data";

export default function CoffeesList({
  title,
  onClickHandler,
  coffeesQty,
}: {
  title: string;
  onClickHandler: OnClickHandler;
  coffeesQty : IValues
}) {
  return (
    <div className="my-2">
      <h2 className="font-bold text-lg text-appGreen text-center">{title}</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 pt-3">
        {data.map((el, index) => {
          return (
            <Coffee
              key={index}
              {...el}
              quantity={coffeesQty[el.name]}
              price={title ==="Bill" ? el.price * coffeesQty[el.name] : el.price}
              title={title}
              onClickHandler={(e, qtyName) => onClickHandler(e, qtyName)}
            />
          );
        })}
      </div>
    </div>
  );
}
