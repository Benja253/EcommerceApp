import React from 'react'
import addCartIcon from '../assets/icon-add-cart.png'
import { useNavigate } from 'react-router-dom'

const CardProducts = () => {

  const navigateCardProduct = useNavigate()

  const clickCard = () => {
    navigateCardProduct('/product/1')
  }

  return (
    <article className="card" onClick={clickCard}>
      <header className='header-card'>
        <img
          className='img-product-card'
          src="https://media.ldlc.com/r1600/ld/products/00/05/26/91/LD0005269141_2.jpg"
          alt="imac" 
        />
      </header>
      <div className='body-card'>
        <h3 className='title-product'>Imac 2021 Intel i9</h3>
        <div className='price-card'>
          <h4 className='label-price'>Price</h4>
          <p className='price-number'>3000</p>
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