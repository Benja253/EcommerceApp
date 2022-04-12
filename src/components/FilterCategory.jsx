import React from 'react'
import arrowHeadIcon from '../assets/icon-arrowhead.png'
import iconFilter from '../assets/icon-filter.png'

const FilterCategory = () => {
  return (
    <aside className='filter-price-category-container'>
      <section className='icon-filter-container'>
        <img className='img-icon-filter' src={iconFilter} alt="icon filter" />
        <h3 className='filter-label'>Filters</h3>
      </section>
      <section className='filter-price-container'>
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
          <div className='filter-price-from'>
            <label className='label-from-price' htmlFor="from-price">From</label>
            <input className='input-from-price' type="text" id='from-price' />
          </div>
          <div className='filter-price'>
            <label className='label-to-price' htmlFor="to-price">To</label>
            <input className='input-to-price' type="text" id='to-price' />
          </div>
          <button className='btn-filter-price'>Filter price</button>
        </form>
      </section>
      <section className='category-container'>
        <header className='header-aside'>
          <h2 className='title-section-aside'>Price</h2>
          <img 
            className='arrowhead-aside' 
            src={arrowHeadIcon} 
            alt="arrowhead acordeon" 
          />
        </header>
        <hr className='aside-hr' />
        <ul className='category-list'>
          <li className="category-item">Smart TV</li>
          <li className="category-item">Computers</li>
          <li className="category-item">Smartphones</li>
        </ul>
      </section>
    </aside>
  )
}

export default FilterCategory