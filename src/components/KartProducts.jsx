import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import iconTrash from '../assets/icon-trash.png'

const KartProducts = ({productCart}) => {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  const clickTrashIcon = () => {
    const cartPivot = [...cart]
    const index = cartPivot.findIndex(e => e.product.id === productCart.product.id)
    cartPivot.splice(index, 1)
    dispatch({
      type: 'SET_CART',
      payload: cartPivot
    })
  }

  return (
    <li className='product-cart-item-container'>
      <div className='header-per-product-cart'>
        <h4 className='brand-cart-item'>{productCart.product.category.name}</h4>
        <h3 className='product-cart-item-title'>{productCart.product.title}</h3>
      </div>
      <div className='img-delete-cart-container' onClick={clickTrashIcon}>
        <img
          className='icon-trash-cart' 
          src={iconTrash}
          alt="icon trash"
        />
      </div>
      <p className='product-cart-item-quantity'>{productCart.cant}</p>
      <div className='price-container-product-item-cart'>
        <p className='label-per-product-cart'>Total:</p>
        <h3 className='price-total-per-product-cart'>{productCart.product.price * productCart.cant}</h3>
      </div>
    </li>
  )
}

export default KartProducts