import React from 'react'
import HeaderHome from './HeaderHome'
import FilterCategory from './FilterCategory'
import SearchBar from './SearchBar'
import MainEcommerce from './MainEcommerce'
import Footer from './Footer'
import Cart from './Cart'

const Home = () => {
  return (
    <div className='home'>
      <HeaderHome />
      <SearchBar />
      <Cart />
      <FilterCategory />
      <MainEcommerce />
      <Footer />
    </div>
  )
}

export default Home