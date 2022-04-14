import React from 'react'
import CardProducts from '../CardProducts'

const SimilarItems = () => {
  return (
    <section className='similar-item-container'>
      <h2 className='similar-item-title'>Descover similar Items</h2>
      <div className='similar-items-card-container'>
        <CardProducts />
        <CardProducts />
        <CardProducts />
        <CardProducts />
        <CardProducts />
      </div>
    </section>
  )
}

export default SimilarItems