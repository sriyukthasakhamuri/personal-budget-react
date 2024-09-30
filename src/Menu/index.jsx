import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="menu" role="navigation"
             aria-label='Main menu'
             itemScope
             itemType='https://schema.org/SiteNavigationElement'>
            <ul>
                <li><Link to={'/'}>Homepage</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/login'}>Login</Link></li>

                <li><a className="skip-to-content" href="#mainPage">Skip to Content</a></li>
            </ul>
        </nav>
    );
}

export default Menu;