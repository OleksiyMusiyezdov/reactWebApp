import React from 'react';
import './Dropdown.css';

import { LangContext } from '../LangContext';

function Dropdown() {
    return (
        <LangContext.Consumer>
            {(value) => (
                <div className="dropdown">
                    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown">
                        {value.nav_language}</button>
                    <ul class="dropdown-menu">
                        <li><a class="li" href="/en">ENG</a></li>
                        <li><a class="li" href="/pl">POL</a></li>
                        <li><a class="li" href="/uk">UKR</a></li>
                        <li><a class="li" href="/ru">RUS</a></li>
                    </ul>
                </div>
            )}
        </LangContext.Consumer>
    );
}

export default Dropdown;