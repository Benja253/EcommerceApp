import React from 'react'
import addCartIcon from '../assets/icon-add-cart.png'
import { useNavigate } from 'react-router-dom'

const CardProducts = ({product}) => {

  const navigateCardProduct = useNavigate()

  const clickCard = () => {
    navigateCardProduct(`/product/${product.id}/`)
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