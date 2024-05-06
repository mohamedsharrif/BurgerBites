import React from "react";
import ListOfProducts from "../ListOfProducts";
import Product from "./Product";

const Products = () => {
  return (
    <div className="grid">
      {ListOfProducts.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default Products;
