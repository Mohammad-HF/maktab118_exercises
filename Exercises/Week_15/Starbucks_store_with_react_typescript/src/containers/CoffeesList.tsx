import Coffee from "../components/Coffee";
import { data } from "../data/data";

export default function CoffeesList({
  title,
  onClickHandler,
  coffeesQty,
  totalPrice,
}: {
  title: string;
  onClickHandler: OnClickHandler;
  coffeesQty: IValues;
  totalPrice?: number;
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
              price={
                title === "Bill" ? el.price * coffeesQty[el.name] : el.price
              }
              title={title}
              onClickHandler={onClickHandler}
            />
          );
        })}
      </div>
      {title === "Bill" && (
        <>
          <h2 className="text-appGreen font-semibold text-lg text-center my-1">
            Total: ${totalPrice}
          </h2>
          <button
            onClick={() => console.log(totalPrice)}
            className="w-full text-white bg-appCream font-bold py-1 rounded-md hover:bg-appCream/80 disabled:bg-appCream disabled:opacity-50"
            disabled={totalPrice === 0 ? true : false}
          >
            Submit Order
          </button>
        </>
      )}
    </div>
  );
}
