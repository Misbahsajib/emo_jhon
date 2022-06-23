import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    const [cart,setCart]=useState([]);
    const handelAddToCard=(product)=>{
        console.log(product);
        const newcart=[...cart,product]
        setCart(newcart)
    }

    return (
        <div className='shop-container'>
            {/* for shopping */}
            <div className="products-container">
            {
             products.map(product=><Product
                 key={product.id}
                 product={product}
                 handelAddToCard={handelAddToCard}
                 ></Product>)
            }
            </div>
            <div className="cart-container">  
                <Cart cart={cart}></Cart>
             </div>
        </div>
    );
};

export default Shop;