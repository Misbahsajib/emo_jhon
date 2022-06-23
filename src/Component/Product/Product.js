import { click } from '@testing-library/user-event/dist/click';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'
const Product = (props) => {
    const{name,category,seller,ratings,img,price}=props.product;
    console.log(props)

    return (
        <div className='product'>
           <img src={img} alt="" />
           <h4>{name}</h4>
        <div className='product-info'>
          
            <h5>price:{price}</h5>
            <p>seller:{seller}</p>  
            <p>category:{category}</p>
            <p><samll>ratings:{ratings} star</samll></p>
        </div>
            <button onClick={() => props.handelAddToCard(props.product)} className='btn-cart'>
                <p>add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart }></FontAwesomeIcon>
            </button>


        </div>
    );
};

export default Product;