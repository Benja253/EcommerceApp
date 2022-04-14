import React from 'react'
import iconArrowhead from '../../assets/icon-arrowhead.png'

const SliderInfo = () => {
  return (
    <div className='slider-container-info'>
      <button className='btn-back-next-info'>
        <img
          className='arrowhead-back-info'
          src={iconArrowhead}
          alt="arrowhead icon back" 
        />
      </button>
      <div className='img-container-slider-info'>
        <div className='img-container-info'>
          <img
            className='img-item'
            src='https://media.ldlc.com/r1600/ld/products/00/05/26/91/LD0005269141_2.jpg'
            alt="imac" 
          />
          <img
            className='img-item'
            src='https://media.ldlc.com/r1600/ld/products/00/05/26/91/LD0005269141_2.jpg'
            alt="imac" 
          />
          <img
            className='img-item'
            src='https://media.ldlc.com/r1600/ld/products/00/05/26/91/LD0005269141_2.jpg'
            alt="imac" 
          />
        </div>
      </div>
      <button className='btn-back-next-info'>
        <img
          className='arrowhead-next-info'
          src={iconArrowhead}
          alt="arrowhead icon back" 
        />
      </button>
    </div>
  )
}

export default SliderInfo