import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../apis/products.api";
import { ProductCard } from "../components/ProductCard";

export const AllProducts: React.FC = () => {
  const products = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return (
    <div>
      {products.isPending && <h2>is loading ...</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 pl-2">
        {products.isFetched &&
          products.data?.products.map((card) => (
            <ProductCard key={card.id} {...card} />
          ))}
      </div>
    </div>
  );
};
