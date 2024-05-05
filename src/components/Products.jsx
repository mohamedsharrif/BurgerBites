import React from 'react'
import ListOfProducts from '../ListOfProducts'

const Products = () => {
  
  return (
    ListOfProducts.map((product, index) =>(
        <div key={index}>
        <h2>{product.name}</h2>
        <img src={product.image} alt='' style={{width: 100}}/>
        <span>{product.price}</span>
        </div>
    ))
  )
}

export default Products
