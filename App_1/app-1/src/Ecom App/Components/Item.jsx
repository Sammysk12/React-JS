import React from 'react'
import { CartContext, useCart } from '../Contexts/CartContext';

const Item = (props) => {
  
  const cartContext = useCart();
  console.log(cartContext);
    return (
    <div className='item-card'>
        <h4>{props.name}</h4>
        <p>${props.price}</p>
        <button onClick={()=>cartContext.setItems([...cartContext.items, {name: props.name, price: props.price}])}>Add To Cart</button>
    </div>
  )
}

export default Item;