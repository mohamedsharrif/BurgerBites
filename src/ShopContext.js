import { useContext, useReducer } from "react";
import shopReducer, { initialState } from "./shopReducer";

const shopContext = useContext(initialState);

const shopProvider = ({children}) => {
   const [state, dispatch] = useReducer(shopReducer,initialState)

   const addToCart = (product) => {

    const updatedProduct = state.products.concat(product)

    dispatch({
        type: "ADD_TO_CART",
        payload: {
            products: payload.products
        }
    })

   }
}