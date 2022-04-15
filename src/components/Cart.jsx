import React from 'react'
import iconTrash from '../assets/icon-trash.png'

const Cart = () => {
  return (
    <article className='cart-container'>
      <h2 className='cart-title'>Carrito de compras</h2>
      <ul className='product-cart-list'>
        <h4 className='brand-cart-item'>Samsung</h4>
        <h3 className='product-cart-item-title'>Samsing Galaxy S22</h3>
        <p className='product-cart-item-quantity'>2</p>
        <div className='img-delete-cart-container'>
          <img
            className='icon-trash-cart' 
            src={iconTrash}
            alt="icon trash" />
        </div>
      </ul>
    </article>
  )
}

export default Cart