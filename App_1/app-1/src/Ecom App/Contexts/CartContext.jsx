import React, { createContext, useState } from 'react'

export const CartContext = createContext(null);

//Creating a custom hook bcoz it can make things easy 

export const useCart = () => {
    const cartItems = useContext(CartContext);
    return cartItems;
}


export const CartProvider = (props) =>{

    const [items, setItems] = useState([]);
    return <CartContext.Provider value={{items, setItems}} >{props.children}</CartContext.Provider>
}