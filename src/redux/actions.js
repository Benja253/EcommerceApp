import axios from "axios"

export const actions = {
  setProducts: "SET_PRODUCTS",
  setProductTarget: 'SET_PRODUCT_TARGET',
  setCategories: 'SET_CATEGORIES',
  setProductsPerCategory: 'SET_PRODUCT_PER_CATEGORY'
}

export const setProducts = products => ({
  type: actions.setProducts,
  payload: products
})

export const setProductTarget = product => ({
  type: actions.setProductTarget,
  payload: product
})

export const setCategories = categories => ({
  type: actions.setCategories,
  payload: categories
})

export const setProductsPerCategory = productsPerCategory => ({
  type: actions.setProductsPerCategory,
  payload: productsPerCategory
})

export const getProductsThunk = () => {
  return dispatch => {
    return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
      .then(res => dispatch(setProducts(res.data)))
  }
}

export const getProductTargetThunk = (id) => {
  return dispatch => {
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
      .then(res => dispatch(setProductTarget(res.data)))
  }
}

export const getCategoriesThunk = () => {
  return dispatch => {
    return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
      .then(res => dispatch(setCategories(res.data)))
  }
}

export const getProductsPerCategoryThunk = (id) => {
  return dispatch => {
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${id}`)
      .then(res => dispatch(setProductsPerCategory(res.data)))
  }
}