import { useQuery } from "react-query";
import { QueryKey, fetcher } from "../../queryClient";
import { Product } from "../../types";
import ProductItem from "../../components/products/Item";

const ProductList = () => {
  const { data } = useQuery(QueryKey.PRODUCTS, () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );
  console.log(data);
  return (
    <ul className="products">
      {data?.map((product: Product) => (
        <ProductItem {...product} key={product.id} />
      ))}
    </ul>
  );
};

export default ProductList;
