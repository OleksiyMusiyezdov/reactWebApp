import React from 'react';
import './Contacts.css';

function Contacts() {
    return (

        <div className="headerResponsive" id="headerResponsive">
            <div className="col">
                <div>
                    <a className="contacts" href="tel:+380955414020">Tel </a>/<a className="contacts" href="viber://chat?number=380955414020"> Viber:</a><span id="phone"> +38 095 541 40 20</span>
                </div>

                <div>
                    <a className="contacts" href="mailto: luchik.project@gmail.com">
                        <svg id="svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
                        </svg>
                        luchik.project@gmail.com
                                </a>
                </div>

                <div>
                    <a className="contacts" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/LanaLuchikSport/">
                        <svg id="svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                        </svg>
                        www.facebook.com/LanaLuchikSport/
                                </a>
                </div>
            </div>
        </div>

    );
}

export default Contacts;