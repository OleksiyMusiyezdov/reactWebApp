import React from 'react';
import './Titles.css';

import { LangContext } from '../LangContext';

function Titles() {
    return (

        <LangContext.Consumer>
            {(value) => (
                <div className="home_content" id="">
                    <div className="home_title">
                        {value.home_title}
                    </div>

                    <div className="home_text">
                        <div className="list">{value.header_list_1}</div>
                        <div className="list">{value.header_list_2}</div>
                    </div>
                </div>
            )}
        </LangContext.Consumer>
    );
}

export default Titles;