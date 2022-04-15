import React from 'react'

const PurchasesPerDate = () => {
  return (
    <div className='purchases-per-date'>
      <h3 className='date-title'>April 6, 2022</h3>
      <hr className='hr-purchases' />
      <ul className='products-purchases-list'>
        <li className='product-purchase-item'>
          <h4 className='product-purchase-title'>Samsung Galaxy S22</h4>
          <div className='quantity-price-container-purchase'>
            <p className='product-purchase-quantity'>2</p>
            <p className='product-purchase-price'>1300.00</p>
          </div>
        </li>
        <li className='product-purchase-item'>
          <h4 className='product-purchase-title'>Samsung Galaxy S22</h4>
          <div className='quantity-price-container-purchase'>
            <p className='product-purchase-quantity'>2</p>
            <p className='product-purchase-price'>1300.00</p>
          </div>
        </li>
        <li className='product-purchase-item'>
          <h4 className='product-purchase-title'>Samsung Galaxy S22</h4>
          <div className='quantity-price-container-purchase'>
            <p className='product-purchase-quantity'>2</p>
            <p className='product-purchase-price'>1300.00</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default PurchasesPerDate