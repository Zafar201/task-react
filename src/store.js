import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import { cartReducer} from './reducers/itemReducer'


import { getCurrencyReducer } from './reducers/generalReducer'

const initialState = {
   cart:{
         basket:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]
      },
   
}
const reducer = combineReducers({   
   currency:getCurrencyReducer,
    cart:cartReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;