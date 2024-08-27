import React ,{useContext} from 'react';
import {CartContext} from '../shared/context/Cart-context'
const Cart = () => {
    const [cartItems,setCartItems]=useContext(CartContext)
   const totalPrice= cartItems.reduce((prevValue,currValue)=>{
        return prevValue + currValue.price

    },0)
    return (
        <div className='cart'>
            <p>items in cart : {cartItems.length}</p>
            <p>total price : {totalPrice}</p>
            
        </div>
    );
};

export default Cart;