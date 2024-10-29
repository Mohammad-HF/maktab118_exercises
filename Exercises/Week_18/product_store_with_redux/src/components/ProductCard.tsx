import { IoStar, IoStarHalfOutline } from "react-icons/io5";
import { IProducts } from "../types/products.type";
import { Button } from "./header/Button";
import { useDispatch } from "react-redux";
import { cardAction } from "../redux/features/cardSlice";

export const ProductCard: React.FC<IProducts> = ({
  id,
  title,
  images,
  price,
  stock,
  availabilityStatus,
  rating,
  shippingInformation
}) => {
  const dispatch = useDispatch();
  const addToCard = () => {
    dispatch(cardAction.addToCard({ id, image: images[0], price, title ,rate:rating}));
  };
  const removeOfCard = () => {
    dispatch(cardAction.removeOfCard(id));
  };

  return (
    <div className=" border rounded-md px-4 py-3">
      {/* images not load */}
      {/* <img src={images[0]} alt="pic" /> */}
      <img className="rounded-md" src="lake-Montain.jpg" alt="pic" />
      <h2 className="font-semibold">{title}</h2>
      <div className="flex gap-x-1 items-center">
        <p>{rating}</p>
        {[1,2,3,4,5].slice(0,Math.round(rating)).map((el)=> <p key={el}><IoStar /></p>)}
      </div>
      <p className="font font-semibold">${price}</p>
      <p>{availabilityStatus}</p>
      <p className="text-sm">
        available qty : <span className="font-semibold">{stock}</span>
      </p>
      <p className="text-sm font-semibold">{shippingInformation}</p>
      <Button add={addToCard} remove={removeOfCard} idProduct={id} disabled={stock === 0 ? true : false} className="disabled:bg-gray-400"/>
    </div>
  );
};
