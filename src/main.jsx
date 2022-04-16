import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ECommerceApp from './ECommerceApp'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import rootReducer from './redux'

const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ECommerceApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
