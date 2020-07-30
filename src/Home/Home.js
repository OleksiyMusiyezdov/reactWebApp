import React from 'react';
import './Home.css';
import Logo from '../Logo/Logo';
import Contacts from '../Contacts/Contacts';
import Dropdown from '../Dropdown/Dropdown';
import Titles from '../Titles/Titles';
import Hidden from '../Hidden/Hidden';

function Home() {

    return (
        <div className="home">
            <nav className="navbar navbar-expand-md navbar-light sticky-top" id="navbar"> {/* Подключить Bootstrap */}
                <Logo />
                <div className="navbarResponsive">
                    <Contacts />
                    <Dropdown />
                </div>
            </nav>
            <Titles />
            <Hidden />
        </div >
    );
}

export default Home;