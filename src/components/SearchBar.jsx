import React from 'react'
import lupaIcon from '../assets/lupa.png'

const SearchBar = () => {
  return (
    <aside className='search-bar-container'>
      <form className='form-search-bar'>
        <input
          className='input-search'
          type="text"
          placeholder='What are you looking for?'
        />
        <button className='btn-search'>
          <img
            className='icon-lupa-search'
            src={lupaIcon}
            alt="lupa icon" />
        </button>
      </form>
    </aside>
  )
}

export default SearchBar