import React from 'react';
import './ScrollToTop.css';

class ScrollToTop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visibility: "hidden"
        }
    }

    render() {

        var buttonVisibility = this.state;

        // window.onscroll = function (event, buttonVisibility) {

        //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        //         buttonVisibility = { visibility: "visible" };
        //         //ScrollToTop.setState() = { visibility: "visible" };
        //         //document.getElementById('myBtn').addClass('show');
        //     } else {
        //         buttonVisibility = { visibility: "hidden" };
        //         //ScrollToTop.setState() = { visibility: "hidden" };
        //         //document.getElementById('myBtn').removeClass('show');
        //     }
        // }

        console.log(buttonVisibility);

        return <div className="ScrollToTop">
            <button
                id="myBtn"
                title="Go to top"
                //style={this.state}
                onclick={(event) => {
                    window.scroll(0, 0);
                    //event.preventDefault();
                    //this.scroll();
                    // window.scrollTop();
                    // document.body.scrollTop = 0;
                    // document.documentElement.scrollTop = 0;
                }}
            ></button>
        </div>
    }
}

export default ScrollToTop;