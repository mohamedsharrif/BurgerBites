import React from 'react'
import CartProduct from '../components/CartProduct'
import Payment from '../components/PaymentForm'

const Cart = () => {
  return (
    <div className='cart-container'>
      <CartProduct />
      <Payment />
    </div>
  )
}

export default Cart
