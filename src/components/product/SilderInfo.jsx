import React from 'react'
import iconArrowhead from '../../assets/icon-arrowhead.png'

const SliderInfo = ({product}) => {

  const nextImg = e => {
    let slider
    if(e.target.classList.contains('btn-back-next-info')){
      slider = e.target.parentElement.childNodes[1].firstChild
    } else {
      slider = e.target.parentElement.parentElement.childNodes[1].firstChild
    }
    if(slider.classList.contains('slider-translate-2')){
      slider.classList.remove('slider-translate-2')
      slider.classList.add('slider-translate-3')
    } else if(slider.classList.contains('slider-translate-3')) {
      slider.classList.remove('slider-translate-3')
    } else {
      slider.classList.add('slider-translate-2')
    }
  }

  const previewImg = e => {
    let slider
    if(e.target.classList.contains('btn-back-next-info')){
      slider = e.target.parentElement.childNodes[1].firstChild
    } else {
      slider = e.target.parentElement.parentElement.childNodes[1].firstChild
    }
    if(slider.classList.contains('slider-translate-3')){
      slider.classList.remove('slider-translate-3')
      slider.classList.add('slider-translate-2')
    } else if(slider.classList.contains('slider-translate-2')) {
      slider.classList.remove('slider-translate-2')
    } else {
      slider.classList.add('slider-translate-3')
    }
  }

  return (
    <div className='slider-container-info'>
      <button className='btn-back-next-info' onClick={e => previewImg(e)}>
        <img
          className='arrowhead-back-info'
          src={iconArrowhead}
          alt="arrowhead icon back"
        />
      </button>
      <div className='img-container-slider-info'>
        <div className='img-container-info'>
          {
            product &&
            product.productImgs.map(srcImg => (
              <img
                key={srcImg}
                className='img-item'
                src={srcImg}
                alt=''
              />
            ))
          }
        </div>
      </div>
      <button className='btn-back-next-info'onClick={e => nextImg(e)}>
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