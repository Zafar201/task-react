import { GET_CURRENCY_REQUEST,GET_CURRENCY_SUCCESS,GET_CURRENCY_FAIL } from "../constants/generalConstant"


export const getCurrencyReducer =(state={loading:true,currncy:[]},action)=>{
    switch(action.type){
      case GET_CURRENCY_REQUEST:
        return {loading:true}
      case GET_CURRENCY_SUCCESS:
        return {loading:false,currency:action.payload}
      case GET_CURRENCY_FAIL:
        return {loading:false, error:action.payload}
      default:
        return state;      
    }
  }