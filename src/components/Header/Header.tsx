import * as React from 'react';
import './Header.css';
import * as ReactBg from './../../images/react_bg.png';

function Header() {
    return (
        <header>
            <div className="header">
                Header 2!!!
                <img src={ReactBg}></img>
            </div>
        </header>
    )
}

export default Header;
