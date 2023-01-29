import React from 'react';
import logo from '../../assets/logo.svg';
import './navbar.css';

function NavBar() {
    const navigations = [
        'Home',
        'About'
    ]
    return <header className="NavBar">
        <img src={logo} className="NavBar-logo" alt="logo" />
        <p>Serious App</p>
        <ul className="Navigations">
            {navigations.map(key => <li>{key}</li>)}
        </ul>
        <div className='NavBar-actions'></div>
    </header>
}

export default NavBar;
