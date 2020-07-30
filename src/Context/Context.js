import React from 'react';
import './Context.css';
import { LangContext } from '../LangContext';

class Context extends React.Component {

    render() {
        return (

            <LangContext.Consumer>
                {value => (
                    <div className="Context">
                        <h1>{value}</h1>
                    </div>)
                }
            </LangContext.Consumer>
        )
    }
}

export default Context;