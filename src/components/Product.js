import React from 'react';

const Product = (props) => {
    const addToCart=()=>{
        console.log('clicked!');
        
    }
    return (
        <div className='product'>
            <p>{props.title}</p>
            <p>{props.price}</p>
            <button onClick={addToCart} className='btn'>Add to Cart</button>
            
        </div>
    );
};

export default Product;