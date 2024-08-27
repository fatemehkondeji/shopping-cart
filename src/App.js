import React from 'react';
import ProductList from './components/ProductList'
import Cart from  './components/Cart'
const App = () => {
    return (
        <div className='main'>
            <header className='main-header'>
                <h2> shopping cart</h2>

            </header>
            <ProductList />
            <Cart/>
        </div>
    );
};

export default App;