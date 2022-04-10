import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const ECommerceApp = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default ECommerceApp