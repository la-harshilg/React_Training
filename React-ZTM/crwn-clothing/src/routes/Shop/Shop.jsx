import { useContext } from "react";

import ProductCard from "../../components/ProductCard/ProductCard";

import { ProductsContext } from "../../context/ProductsContext";

import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
