import React from 'react'
import addCartIcon from '../assets/icon-add-cart.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const CardProducts = ({product}) => {

  const navigateCardProduct = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  const clickCard = e => {
    if(!e.target.classList.contains('btn-card-container') && !e.target.classList.contains('icon-add-cart')){
      navigateCardProduct(`/product/${product.id}/`)
    } else {
      const arrayCart = [...cart]
      if(arrayCart.some(e => e?.product.title === product.title)) {
        const index = arrayCart.findIndex(e => e.product.title === product.title)
        arrayCart.splice(index, 1, {
          product,
          cant: cart[index].cant + 1
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
            cant: 1
          }]
        })
      }
    }
  }
  
  return (
    <article className="card" onClick={clickCard}>
      <header className='header-card'>
        <img
          className='img-product-card'
          src={product && product.productImgs[1]}
          alt="imac"
        />
        <img
          className='img-product-card-over'
          src={product && product.productImgs[0]}
          alt="imac"
        />
      </header>
      <div className='body-card'>
        <h3 className='title-product'>{product?.title}</h3>
        <div className='price-card'>
          <h4 className='label-price'>Price</h4>
          <p className='price-number'>{product?.price}</p>
        </div>
        <button className='btn-card-container'>
          <img
            className='icon-add-cart' 
            src={addCartIcon} 
            alt="icon add cart" />
        </button>
      </div>
    </article>
  )
}

export default CardProducts