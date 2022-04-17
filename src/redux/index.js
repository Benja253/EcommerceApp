import { actions } from '../redux/actions'

const INITIAL_STATE = {
  products: null,
  productTarget: null,
  categories: null,
  productsPerCategory: null,
  filterCategory: 'all-categories',
  cart: []
}

const reducer = (state = INITIAL_STATE, action) => {
		switch(action.type){
        case actions.setProducts:
          return {
            ...state,
            products: action.payload 
          }

        case actions.setProductTarget:
          return {
            ...state,
            productTarget: action.payload
          }

        case actions.setCategories:
          return {
            ...state,
            categories: action.payload
          }

        case actions.setProductsPerCategory:
          return {
            ...state,
            productsPerCategory: action.payload
          }

        case actions.setFilterCategory:
          return {
            ...state,
            filterCategory: action.payload
          }

        case actions.setCart:
          return {
            ...state,
            cart: action.payload
          }

        default:
            return state;
    }
}

export default reducer;