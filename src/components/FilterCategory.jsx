import React from 'react'
import arrowHeadIcon from '../assets/icon-arrowhead.png'
import iconFilter from '../assets/icon-filter.png'
import iconEquis from '../assets/icon-equis.png'

const FilterCategory = () => {
  return (
    <aside className='filter-price-category-container'>
      <section className='icon-filter-container'>
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
          <div className='equis-filter'>
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
          <ul className='category-list'>
            <li className="category-item">Smart TV</li>
            <li className="category-item">Computers</li>
            <li className="category-item">Smartphones</li>
          </ul>
        </section>
      </div>
    </aside>
  )
}

export default FilterCategory