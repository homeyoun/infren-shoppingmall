import { useQuery } from "react-query";
import { QueryKeys, fetcher } from "../../queryClient";
import { Product } from "../../types";
import ProductItem from "../../components/products/Item";

const ProductList = () => {
  const { data } = useQuery(QueryKeys.PRODUCTS, () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );
  console.log(data);
  return (
    <div>
      <h2>상품목록</h2>
      <ul className="products">
        {data?.map((product: Product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
