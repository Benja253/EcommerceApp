import React, { useEffect } from 'react'
import CardProducts from './CardProducts'
import { useDispatch } from 'react-redux'
import { getProductsThunk } from '../redux/actions'
import { useSelector } from 'react-redux';

const MainEcommerce = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProductsThunk())
  },[dispatch])

  return (
    <main className='main-container'>
      {
        products &&
        products?.data?.products.map(product => (
          <CardProducts key={product.id} product={product} />
        ))
      }
    </main>
  )
}

export default MainEcommerce