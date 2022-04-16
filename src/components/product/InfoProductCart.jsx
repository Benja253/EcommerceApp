import React from 'react'
import CartInfo from './CartInfo'
import SelectImg from './SelectImg'
import SliderInfo from './SilderInfo'

const InfoProductCart = ({ data }) => {
  return (
    <div className='card-info'>
      <SliderInfo product={data?.product} />
      <CartInfo product={data?.product} />
      <SelectImg product={data?.product} />
    </div>
  )
}

export default InfoProductCart