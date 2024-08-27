import React from 'react'
import './ProductList.css'
import Product from './Product'
const ProductList = () => {
    const products =[
        {id:1 , title:'Book 1' , price:1200},
        {id:2 , title:'Book 2' , price:1100},
        {id:3 , title:'Book 3' , price:1000}
    ]
    return (
        <div className='product-list'>
            {
                products.map((item)=>{
                    return(
                        <Product 
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        
                        />
                    )
                })
            }
            
        </div>
    );
};

export default ProductList;

