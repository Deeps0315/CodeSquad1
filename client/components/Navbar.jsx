import React from 'react';
import {Link } from 'react-router-dom';
import './navbar.css'

export default function Navbar() {
    return(
        <>
        <div id='nav'>
        <div id="logo">
            <img src="./pages/images/profile.png" alt="Delivermeal.com"/>
        </div>
        <ul>
            <li className="item"><Link to='/'>Home</Link></li>
            <li className="item"><Link to='/'>Contact Us</Link></li>
        </ul>
        </div>
        </>
    )
}