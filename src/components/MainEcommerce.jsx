import React, { useEffect } from 'react'
import CardProducts from './CardProducts'
import { useDispatch } from 'react-redux'
import { getProductsThunk, getProductsFilterCategory } from '../redux/actions'
import { useSelector } from 'react-redux';

const MainEcommerce = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.products)
  const filterCategory = useSelector(state => state.filterCategory)

  useEffect(() => {
    if(filterCategory === 'all-categories'){
      dispatch(getProductsThunk())
    } else {
      dispatch(getProductsFilterCategory(filterCategory))
    }
  },[dispatch, filterCategory])

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