import React from 'react'
import { useShop } from '../ShopContext';

const CartProduct = () => {
    const {removeFromCart,products, total} = useShop();
    const roundedTotal = total.toFixed(2);
  return (
    <div className='cart-products'>
      <h2>Cart Products</h2>
      {products.map((product)=>(
        <div className="cart-prodct">
            <div className='cart-title-img'>
                <img src={product.image} alt="" />
                <span>{product.name}</span>
            </div>
            <h5>{product.price}</h5>
            <span className='delete' onClick={()=> removeFromCart(product)}>
                delete
            </span>
        </div>
      ))}
      <div className="total-price">
        <h2>Total Price :{roundedTotal}€</h2>
      </div>
    </div>
  )
}

export default CartProduct
