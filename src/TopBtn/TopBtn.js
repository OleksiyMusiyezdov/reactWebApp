import React from 'react';
import './TopBtn.css';
import BackToTop from "react-back-to-top-button";

class TopBtn extends React.Component {

    render() {
        return <div>
            <BackToTop
                showOnScrollUp
                showAt={100}
                speed={2500}
                easing="easeInOutQuint"
            >
                <div className='topBtn'></div>
            </BackToTop>
        </div>;

    }
}

export default TopBtn;

/*
 * Render the above component into the div with the id 'app'
 */
// React.render(<TopButton scrollStepInPx='50' delayInMs='16.66' />,
//     document.getElementById('app'));
