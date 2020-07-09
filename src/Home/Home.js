import React from 'react';
import './Home.css';
import Contacts from '../Contacts/Contacts';
import Logo from '../Logo/Logo';
// eslint-disable-next-line
import Dropdown from '../Dropdown/Dropdown';

function Home() {
    return (
        <div className="Home">
            <nav className="navbar navbar-expand-md navbar-light sticky-top" id="navbar"> {/* Подключить Bootstrap */}
                <div className="container-fluid" id="container-fluid">

                    <Logo />

                    <div className="navbarResponsive">
                        <Contacts />
                        {/* <Dropdown /> */}
                    </div>
                </div>
            </nav>
        </div >
    );
}

export default Home;