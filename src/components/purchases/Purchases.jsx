import React from 'react'
import Footer from '../Footer'
import HeaderHome from '../HeaderHome'
import AsidePurchases from './AsidePurchases'
import PurchasesInfo from './PurchasesInfo'

const Purchases = () => {
  return (
    <div className='purchases-container'>
      <HeaderHome />
      <AsidePurchases />
      <PurchasesInfo />
      <Footer />
    </div>
  )
}

export default Purchases