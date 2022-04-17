import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsPerCategoryThunk } from '../../redux/actions'
import CardProducts from '../CardProducts'

const SimilarItems = ({data}) => {

  const categories = useSelector(state => state.categories)
  const dispatch = useDispatch()

  let filterCategoryId
  if(categories && data) {
    filterCategoryId = categories?.data.categories.filter(category => category.name === data.product.category)[0].id
  }

  useEffect(() => {
    if(filterCategoryId) {
      dispatch(getProductsPerCategoryThunk(filterCategoryId))
    }
  },[dispatch, filterCategoryId])

  const productsPerCategory = useSelector(state => state.productsPerCategory)

  return (
    <section className='similar-item-container'>
      <h2 className='similar-item-title'>Descover similar Items</h2>
      <div className='similar-items-card-container'>
        {
          productsPerCategory && 
          productsPerCategory?.data.products.map(product => {
            if(data.product.title !== product.title) {
              return <CardProducts key={product.id} product={product} />
            }
          })
        }
      </div>
    </section>
  )
}

export default SimilarItems