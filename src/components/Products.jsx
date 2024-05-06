import React from 'react'
import ListOfProducts from '../ListOfProducts'
import Product from './Product'

const Products = () => {
  
  return (
    ListOfProducts.map((product, index) =>(
        <div className='grid' key={index}>
      <Product product={product}/>
        </div>
    ))
  )
}

export default Products
