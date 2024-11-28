import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("theCart");
    // if (localCartData == []) {
    //     return [];
    // } else {
    //     return JSON.parse(localCartData)
    // }
    const parseData = JSON.parse(localCartData);
    if(!Array.isArray(parseData)) return [];
    return parseData;
}

const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 3,
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } })
    }

    //inc & dec
    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id })
    }
    const setIncrease = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id })
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }

    //clear cart
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }

    useEffect(() => {
        //localstorage
        // dispatch({type: "CART_TOTAL_ITEM"})
        // dispatch({type: "CART_TOTAL_PRICE"})  
        dispatch({type: "CART_ITEM_PRICE_TOTAL"})
        localStorage.setItem("theCart", JSON.stringify(state.cart))
    }, [state.cart])


    return (<CartContext.Provider value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease
    }}>
        {children}
    </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext)
}

export { CartProvider, useCartContext };