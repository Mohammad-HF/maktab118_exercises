import { memo } from "react";
import { IProducts } from "@/types/products.type";
import { Rating } from "./Rating";
import { Button } from "./Button";

export const ProductCard: React.FC<IProducts> = memo(({
  id,
  title,
  images,
  price,
  stock,
  availabilityStatus,
  rating,
  shippingInformation
}) => {

  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4 border rounded-md px-4 py-3">
      {/* images not load */}
      {/* <img src={images[0]} alt="pic" /> */}
      <img className="rounded-md" src="lake-Montain.jpg" alt="pic" />
      <h2 className="font-semibold">{title}</h2>
      <div className="flex gap-x-1 items-center">
        <p>{rating}</p>
        {<Rating rate={Math.round(rating)}/>}
      </div>
      <p className="font font-semibold">${price}</p>
      <p>{availabilityStatus}</p>
      <p className="text-sm">
        available qty : <span className="font-semibold">{stock}</span>
      </p>
      <p className="text-sm font-semibold">{shippingInformation}</p>
      <Button  idProduct={id} disabled={stock === 0 ? true : false} className="disabled:bg-gray-400"/>
    </div>
  );
});
