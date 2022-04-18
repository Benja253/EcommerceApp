import React from 'react'
import Footer from '../Footer'
import HeaderHome from '../HeaderHome'
import AsideInfo from './AsideInfo'
import Cart from '../Cart'
import InfoProductCart from './InfoProductCart'
import SimilarItems from './SimilarItems'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProductTargetThunk } from '../../redux/actions'

const Product = () => {
  
  const { id } = useParams()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getProductTargetThunk(id))
  },[dispatch, id])
  
  const productTarget = useSelector(state => state.productTarget)

  return (
    <div className='product-container'>
      <HeaderHome />
      <AsideInfo data={productTarget?.data} />
      <Cart />
      <InfoProductCart data={productTarget?.data} />
      <SimilarItems data={productTarget?.data} />
      <Footer />
    </div>
  )
}

export default Product