import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h3>order summary</h3>
            <p>selected item:{cart.length}</p>
        </div>
    );
};

export default Cart;