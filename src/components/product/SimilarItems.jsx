import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesThunk, getProductsPerCategoryThunk } from '../../redux/actions'
import CardProducts from '../CardProducts'

const SimilarItems = ({data}) => {
  console.log(data)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategoriesThunk())
  },[dispatch])

  const categories = useSelector(state => state.categories)

  console.log(categories)

  let filterCategory
  if(categories && data) {
    filterCategory = categories?.data.categories.filter(category => category.name === data.product.category)[0].id
  }

  useEffect(() => {
    if(filterCategory) {
      dispatch(getProductsPerCategoryThunk(filterCategory))
    }
  },[dispatch, filterCategory])

  const productsPerCategory = useSelector(state => state.productsPerCategory)

  console.log(productsPerCategory)

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