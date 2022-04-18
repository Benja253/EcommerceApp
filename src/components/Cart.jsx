import React from 'react'
import { useSelector } from 'react-redux'
import KartProducts from './KartProducts'

const Cart = () => {

  const cart = useSelector(state => state.cart)

  let totalPrice = 0
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].product.price * cart[i].cant
  }

  return (
    <article className='cart-container'>
      <h2 className='cart-title'>Carrito de compras</h2>
      <ul className='product-cart-list'>
        {
          cart.length !== 0 &&
          cart.map(productCart => (
            <KartProducts key={productCart.product.id} productCart={productCart} />
          ))
        }
      </ul>
      <hr className='hr-cart' />
      <footer className='footer-cart-container'>
        <p className='label-cart-total'>Total:</p>
        <h3 className='total-price-cart'>{totalPrice}</h3>
        <button className='checkout-cart-btn'>Checkout</button>
      </footer>
    </article>
  )
}

export default Cart