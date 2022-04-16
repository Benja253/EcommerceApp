import { actions } from '../redux/actions'

const INITIAL_STATE = {
  products: null,
  productTarget: null,
  categories: null,
  productsPerCategory: null
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

        default:
            return state;
    }
}

export default reducer;