import React from 'react'
import CartProducts from './CartProducts'

const Cart = () => {
  return (
    <article className='cart-container'>
      <h2 className='cart-title'>Carrito de compras</h2>
      <ul className='product-cart-list'>
       <CartProducts />
       <CartProducts />
       <CartProducts />
       <CartProducts />
       <CartProducts />
       <CartProducts />
      </ul>
      <hr className='hr-cart' />
      <footer className='footer-cart-container'>
        <p className='label-cart-total'>Total:</p>
        <h3 className='total-price-cart'>2850.00</h3>
        <button className='checkout-cart-btn'>Checkout</button>
      </footer>
    </article>
  )
}

export default Cart