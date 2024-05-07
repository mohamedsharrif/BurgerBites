import React from "react";
import ListOfProducts from "../ListOfProducts";
import Product from "./Product";

const Products = () => {
  return (
    <div className="grid">
      {ListOfProducts.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;
