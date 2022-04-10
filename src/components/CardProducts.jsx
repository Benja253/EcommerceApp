import React from 'react'
import addCartIcon from '../assets/icon-add-cart.png'

const CardProducts = () => {
  return (
    <article className="card">
      <header className='header-card'>
        <img
          className='img-product-card'
          src="https://los40.com/los40/imagenes/2021/10/31/tecnologia/1635710472_737328_1635711008_gigante_normal.jpg"
          alt="imac" 
        />
      </header>
      <h3 className='title-product'>Imac 2021 Intel i9</h3>
      <div className='body-card'>
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