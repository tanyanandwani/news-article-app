import React from 'react';
import './TopNav.css'
import Logo from '../../../assets/Logo/Logo';

const topNav = () => {
    return (
        <header className='TopNav'>
            <nav className='navbar'>
                <Logo/>
                <h4 className='navbar-brand'>
                    <strong>News Articles</strong></h4>
                    <div></div>
            </nav>
        </header >



    );
}

export default topNav;