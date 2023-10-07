import { useQuery } from "react-query";
import { QueryKey, fetcher } from "../../queryClient";

const ProductList = () => {
  const { data } = useQuery(QueryKey.PRODUCTS, () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );
  console.log(data);
  return (
    <ul>
      {data?.map((product) => (
        <ProductItem {...product} key={ProductList.id} />
      ))}
    </ul>
  );
};

export default ProductList;
