import React from 'react'
import iconCircle from '../../assets/icon-circle.png'

const AsideInfo = () => {
  return (
    <aside className='route-info'>
      <h3 className='home-title'>Home</h3>
      <div className='icon-circle-container'>
        <img
          className='icon-circle'
          src={iconCircle} 
          alt="icon circle" 
        />
      </div>
      <h3 className='route-selected'>Imac Intel 2021</h3>
    </aside>
  )
}

export default AsideInfo