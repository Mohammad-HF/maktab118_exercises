import { ProductCard } from "@/components/ProductCard";
import getQueryClient from "@/query-config/queryClient.config";


export const AllProducts: React.FC = async() => {
  const products = await getQueryClient()

  return (
    <div>
      {!products.products.length && <h2>is loading ...</h2>}
      <div className="grid grid-cols-12 gap-4 justify-between  pl-2">
        {products.products.length !== 0 &&
          products.products.map((card) => (
            <ProductCard key={card.id} {...card} />
          ))}
      </div>
    </div>
  );
};
