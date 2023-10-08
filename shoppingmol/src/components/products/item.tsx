import { Product } from "../../types";

const ProductItem = ({ category, image, price, rating, title }: Product) => (
  <li className="product-item">
    <p className="product-item__category">{category}</p>
    <p className="product-item__title">{title}</p>
    <img className="product-item__image" src={image} />
    <span>${price}</span>
    <span className="product-item__rating">{rating.rate}</span>
  </li>
);

export default ProductItem;
