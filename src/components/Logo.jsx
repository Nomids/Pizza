import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png'

const Logo = () => {
    return (
        <Link to="/">
            <img src={logo} alt="Classic Pizza Logo"/>
        </Link>
    );
}

export default Logo;
