import { GET_CURRENCY_REQUEST,GET_CURRENCY_SUCCESS,GET_CURRENCY_FAIL,CURRENCY_ADD_ITEM  } from "../constants/generalConstant"
import axios from 'axios'
import { CART_ADD_ITEM, DELETE_CART } from '../constants/cartConstant'


export  const getCurrencyList=()=>async(dispatch)=>{
    dispatch({type:GET_CURRENCY_REQUEST})
    try{
        const {data} = await axios.get('https://data.messari.io/api/v1/assets?fields=id,slug,symbol,name,metrics/market_data/price_usd,metrics/market_data/percent_change_usd_last_24_hours')
        dispatch({type:GET_CURRENCY_SUCCESS,payload:data.data})
    }catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({ type: GET_CURRENCY_FAIL, payload: message });
      }
    
}

export const addCurrency=(item)=>async(dispatch,getState)=>{
  dispatch({type:CART_ADD_ITEM,payload:item})
  localStorage.setItem('cartItems',JSON.stringify(getState().cart.basket))
 
}