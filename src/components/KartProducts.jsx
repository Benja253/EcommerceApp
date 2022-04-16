import React from 'react'
import iconTrash from '../assets/icon-trash.png'

const KartProducts = () => {
  return (
    <li className='product-cart-item-container'>
      <div className='header-per-product-cart'>
        <h4 className='brand-cart-item'>Samsung</h4>
        <h3 className='product-cart-item-title'>Samsung Galaxy S22</h3>
      </div>
      <div className='img-delete-cart-container'>
        <img
          className='icon-trash-cart' 
          src={iconTrash}
          alt="icon trash" />
      </div>
      <p className='product-cart-item-quantity'>2</p>
      <div className='price-container-product-item-cart'>
        <p className='label-per-product-cart'>Total:</p>
        <h3 className='price-total-per-product-cart'>958.00</h3>
      </div>
    </li>
  )
}

export default KartProducts