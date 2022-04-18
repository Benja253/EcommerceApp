import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import iconAddCart from '../../assets/icon-add-cart.png'

const CartInfo = ({product}) => {

  const [quantity, setQuantity] = useState(1)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  
  const counterPlus = () => setQuantity(quantity + 1)

  const counterMinus = () => {
    if(quantity !== 1) {
      setQuantity(quantity - 1)
    }
  }

  const clickAddCart = () => {
    const arrayCart = [...cart]
      if(arrayCart.some(e => e?.product.title === product.title)) {
        const index = arrayCart.findIndex(e => e.product.title === product.title)
        arrayCart.splice(index, 1, {
          product,
          cant: quantity
        })
        dispatch({
          type: 'SET_CART',
          payload: arrayCart
        })
      } else {
        dispatch({
          type: 'SET_CART',
          payload: [...cart, {
            product,
            cant: quantity
          }]
        })
      }
      setQuantity(1)
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
        <button className='button-add-cart-info' onClick={clickAddCart}>
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