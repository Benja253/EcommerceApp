import React from 'react'
import iconUser from '../assets/icon-user.png'
import iconPurchases from '../assets/icon-purchases.png'
import iconCart from '../assets/icon-cart.png'

const HeaderHome = () => {
  return (
    <header className='header-home'>
      <h1 className='logo-title'>e-commerce</h1>
      <nav className='nav-bar'>
        <ul className='list-nav-bar'>
          <li className='item-nav-bar'>
            <img className='icon-nav-bar' src={iconUser} alt='icon user' />
          </li>
          <li className='item-nav-bar'>
            <img className='icon-nav-bar' src={iconPurchases} alt="icon purchases" />
          </li>
          <li className='item-nav-bar'>
            <img className='icon-nav-bar' src={iconCart} alt="icon cart" />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderHome