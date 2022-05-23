import { CART_ADD_ITEM, DELETE_CART } from "../constants/cartConstant";

const initialState={
    loading:false,
    basket:[],
    error:null
}

export const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case CART_ADD_ITEM:
            const newBasket=[...state.basket,action.payload]
            // const countInStock=[...state.basket.count]
            return{
              ...state,
              basket:newBasket
            }

         default:
             return state   
    }
}