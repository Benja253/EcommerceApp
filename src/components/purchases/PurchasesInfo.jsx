import React from 'react'
import PurchasesPerDate from './PurchasesPerDate'

const PurchasesInfo = () => {
  return (
    <section className='section-purchases'>
      <h2 className='purchases-title'>My purchases</h2>
      <ul className='purchases-list'>
        <PurchasesPerDate />
        <PurchasesPerDate />
        <PurchasesPerDate />
        <PurchasesPerDate />
      </ul>
    </section>
  )
}

export default PurchasesInfo