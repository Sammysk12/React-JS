import React from 'react'
import { CartContext, useCart } from '../Contexts/CartContext'

const Cart = () => {
  const cartItems = useCart();
  
  const totalBill = cartItems.items.reduce((a, b) => a + b.price, 0);
    
    return (
    <div className='cart'>
       <br /><br />
       <h1>Cart</h1> 
       {cartItems && cartItems.items.map((item) => <li>{item.name} - {item.price}</li>)}

        <h5>Total Bill : ${totalBill}</h5>
    </div>
  )
}

export default Cart