import React from 'react'
import CartInfo from './CartInfo'
import SelectImg from './SelectImg'
import SliderInfo from './SilderInfo'

const InfoProductCart = () => {
  return (
    <div className='card-info'>
      <SliderInfo />
      <CartInfo />
      <SelectImg />
    </div>
  )
}

export default InfoProductCart