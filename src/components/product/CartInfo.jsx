import React from 'react'
import iconAddCart from '../../assets/icon-add-cart.png'

const CartInfo = () => {
  return (
    <article className='cart-info-container'>
      <h2 className='name-product-info'>Imac Intel 2021</h2>
      <p className='product-description-info'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eius adipisci ullam distinctio, cumque voluptate aperiam, quis cupiditate odio delectus nihil at omnis quibusdam quos sint! Quaerat dolore debitis tenetur!
        Veritatis debitis est sed rerum amet vero aperiam harum neque libero ea dolor, ad nulla, doloremque et. Ad, natus. Nostrum neque nisi fuga impedit aliquid quibusdam labore unde iusto autem.
      </p>
      <footer className='footer-cart-info'>
        <div className='price-container-info'>
          <h3 className='price-quantity-label'>Price</h3>
          <p className='price-info'>850</p>
        </div>
        <div className='quantity-container-info'>
          <h3 className='price-quantity-label'>Quantity</h3>
          <div className='counter-cant-container'>
            <button className='minus-plus-counter'>-</button>
            <div className='counter-info'>1</div>
            <button className='minus-plus-counter'>+</button>
          </div>
        </div>
        <button className='button-add-cart-info'>
          Add to cart 
          <img
            className='img-add-cart-info'
            src={iconAddCart}
            alt="icon add cart" 
          />
        </button>
      </footer>
    </article>
  )
}

export default CartInfo