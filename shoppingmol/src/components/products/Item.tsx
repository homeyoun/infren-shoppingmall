import { Link } from "react-router-dom";
import { PRODUCT } from "../../graphql/products";

const ProductItem = ({ imageUrl, price, createdAt, title, description, id }: PRODUCT) => (
  <li className="product-item">
    <Link to={`/products/${id}`}>
      <p className="product-item__title">{title}</p>
      <img className="product-item__image" src={imageUrl} />
      <span className="product-item__price">${price}</span>
    </Link>
  </li>
);

export default ProductItem;
