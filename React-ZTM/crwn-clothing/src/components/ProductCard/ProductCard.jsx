import Button from "../Button/Button";
import "./ProductCard.scss";

import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addItemtoCart } = useContext(CartContext);

  const addProductToCart = () => addItemtoCart(product);

  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">₹{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
