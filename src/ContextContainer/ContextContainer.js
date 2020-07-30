import React from 'react';
import './ContextContainer.css';
import { LangContext } from '../LangContext';

class ContextContainer extends React.Component {

    render() {
        return (



            <LangContext.Consumer>
                {value => (
                    <div className="ContextContainer">
                        <h1>{value}</h1>
                    </div>)
                }
            </LangContext.Consumer>
        )
    }
}

export default ContextContainer;