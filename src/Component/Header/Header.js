import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (

        <nav  className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/home">home</a>
                <a href="/about">about</a>
                <a href="/inventory">inventory</a>
                <a href="/shop">shop</a>
            </div>
        </nav>

    );
};

export default Header;