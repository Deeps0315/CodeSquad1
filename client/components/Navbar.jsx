import React from 'react';
import {Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './component.css'

export default function Navbar() {
    return(
        <>
       
        <div id='nav1'>
        <div className='upnav'>
            <h2>CodeSquad</h2>
        </div>
        <div className='nav'>
        
        <ul>
            <li className="item"><Link to='/'>Home</Link></li>
            <li className="item"><Link to='/aboutUs'>About Us</Link></li>
            <li className="item"><HashLink smooth to="#features">Features</HashLink></li>
            <li className="item"><Link to='/contactUs'>Contact Us</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
        </div>
        </div>
        
        </>
    )
}