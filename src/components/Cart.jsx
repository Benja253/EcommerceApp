import React from 'react'
import { useSelector } from 'react-redux'
import KartProducts from './KartProducts'

const Cart = () => {

  const cart =  useSelector(state => state.cart)

  return (
    <article className='cart-container'>
      <h2 className='cart-title'>Carrito de compras</h2>
      <ul className='product-cart-list'>
       <KartProducts />
       <KartProducts />
       <KartProducts />
       <KartProducts />
       <KartProducts />
       <KartProducts />
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