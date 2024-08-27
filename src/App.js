import React from 'react';
import ProductList from './components/ProductList'
import Cart from  './components/Cart'
import {CartProvider} from './shared/context/Cart-context'
const App = () => {
    return (
        <CartProvider>
         <div className='main'>
            <header className='main-header'>
                <h2> shopping cart</h2>

            </header>
            <ProductList />
            <Cart/>
          </div>
        </CartProvider>
       
    );
};

export default App;