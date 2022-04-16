import React, { useState } from 'react'
import iconAddCart from '../../assets/icon-add-cart.png'

const CartInfo = ({product}) => {

  const [quantity, setQuatity] = useState(1)
  
  const counterPlus = () => setQuatity(quantity + 1)

  const counterMinus = () => {
    if(quantity !== 1) {
      setQuatity(quantity - 1)
    }
  }

  return (
    <article className='cart-info-container'>
      <h2 className='name-product-info'>{product?.title}</h2>
      <p className='product-description-info'>{product?.description}</p>
      <footer className='footer-cart-info'>
        <div className='price-container-info'>
          <h3 className='price-quantity-label'>Price</h3>
          <p className='price-info'>{product?.price}</p>
        </div>
        <div className='quantity-container-info'>
          <h3 className='price-quantity-label'>Quantity</h3>
          <div className='counter-cant-container'>
            <button className='minus-plus-counter' onClick={counterMinus}>-</button>
            <div className='counter-info'>{quantity}</div>
            <button className='minus-plus-counter' onClick={counterPlus}>+</button>
          </div>
        </div>
        <button className='button-add-cart-info'>
          Add to cart 
          <img
            className='img-add-cart-info'
            src={iconAddCart}
            alt="icon add cart" 
          />
        </button>
      </footer>
    </article>
  )
}

export default CartInfo