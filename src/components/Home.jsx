import React from 'react'
import HeaderHome from './HeaderHome'
import FilterCategory from './FilterCategory'
import SearchBar from './SearchBar'
import MainEcommerce from './MainEcommerce'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='home'>
      <HeaderHome />
      <SearchBar />
      <FilterCategory />
      <MainEcommerce />
      <Footer />
    </div>
  )
}

export default Home