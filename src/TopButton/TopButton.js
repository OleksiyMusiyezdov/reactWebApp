import React from 'react';
import './TopButton.css';

class TopButton extends React.Component {

    render() {
        return <button href='#' title='Back to top'
            id='scroll' className='scroll'
            onClick={(event) => {
                window.scroll(0, 0);
            }}>
        </button>;
    }
}

export default TopButton;
