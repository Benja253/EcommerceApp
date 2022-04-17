import React, { useEffect } from 'react'
import arrowHeadIcon from '../assets/icon-arrowhead.png'
import iconFilter from '../assets/icon-filter.png'
import iconEquis from '../assets/icon-equis.png'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesThunk } from '../redux/actions'

const FilterCategory = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategoriesThunk())
  },[dispatch])

  const categories = useSelector(state => state.categories)

  const clickOpenFilter = e => {
    if(e.target.classList.contains('icon-filter-container')) {
      e.target.parentElement.childNodes[1].classList.add('filter-container-sections-show')
    } else {
      e.target.parentElement.parentElement.childNodes[1].classList.add('filter-container-sections-show')
    }
  }

  const equisClickFilter = e => {
    if(e.target.classList.contains('equis-filter')){
      e.target.parentElement.parentElement.classList.remove('filter-container-sections-show')
    } else{
      e.target.parentElement.parentElement.parentElement.classList.remove('filter-container-sections-show')
    }
  }

  const filterPerCategoryClick = e => {

    if(e.target.parentElement.classList.contains('category-list')) {
      for(let i = 0; i < e.target.parentElement.childNodes.length; i++){
        e.target.parentElement.childNodes[i].classList.remove('category-item__active')
      }
      e.target.classList.add('category-item__active')
    }

    if(e.target.classList.contains('category-item')){
      dispatch({
        type: 'SET_FILTER_CATEGORY',
        payload: e.target.id
      })
    }
  }

  return (
    <aside className='filter-price-category-container'>
      <section className='icon-filter-container' onClick={e => clickOpenFilter(e)}>
        <img 
          className='img-icon-filter'
          src={iconFilter}
          alt="icon filter"
        />
        <h3 className='filter-label'>Filters</h3>
      </section>
      <div className='filter-container-sections'>
        <h2 className='filters-title'>Filters</h2>
        <section className='filter-price-container'>
          <div className='equis-filter' onClick={e => equisClickFilter(e)}>
            <img className='icon-equis-filter' src={iconEquis} alt="icon x" />
          </div>
          <header className='header-aside'>
            <h2 className='title-section-aside'>Price</h2>
            <img
              className='arrowhead-aside'
              src={arrowHeadIcon}
              alt="arrowhead acordeon"
            />
          </header>
          <hr className='aside-hr' />
          <form className='form-filter'>
            <div className='filter-price-div'>
              <label className='label-from-to-price' htmlFor="from-price">From</label>
              <input className='input-from-to-price' type="text" id='from-price' />
            </div>
            <div className='filter-price-div'>
              <label className='label-from-to-price' htmlFor="to-price">To</label>
              <input className='input-from-to-price' type="text" id='to-price' />
            </div>
            <button className='btn-filter-price'>Filter price</button>
          </form>
        </section>
        <section className='category-container'>
          <header className='header-aside'>
            <h2 className='title-section-aside'>Category</h2>
            <img 
              className='arrowhead-aside' 
              src={arrowHeadIcon} 
              alt="arrowhead acordeon" 
            />
          </header>
          <hr className='aside-hr' />
          <ul className='category-list' onClick={filterPerCategoryClick}>
            <li id='all-categories' className="category-item category-item__active">All Categories</li>
            {
              categories &&
              categories?.data.categories.map(category => (
                <li key={category?.id} id={category?.id} className="category-item">{category?.name}</li>
              ))
            }
          </ul>
        </section>
      </div>
    </aside>
  )
}

export default FilterCategory