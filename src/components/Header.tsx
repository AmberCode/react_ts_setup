import * as React from 'react';
import * as Styles from './../styles/Header.css';
import * as ReactBg from './../images/react_bg.png';

function Header() {
    return (
        <header>
            <div className={Styles.header}>
                Header 2!!!
                <img src={ReactBg}></img>
            </div>
        </header>
    )
}

export default Header;
