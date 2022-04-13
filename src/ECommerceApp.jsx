import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Product from './components/product/Product'

const ECommerceApp = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </HashRouter>
  )
}

export default ECommerceApp