import React from 'react'
import Footer from '../Footer'
import HeaderHome from '../HeaderHome'
import AsideInfo from './AsideInfo'
import InfoProductCart from './InfoProductCart'
import SimilarItems from './SimilarItems'

const Product = () => {
  return (
    <div className='product-container'>
      <HeaderHome />
      <AsideInfo />
      <InfoProductCart />
      <SimilarItems />
      <Footer />
    </div>
  )
}

export default Product