import React from 'react';
import './CTA.css';

import { LangContext } from '../LangContext';

function CTA() {
    return (
        <LangContext.Consumer>
            {(value) => (
                <div className="cta">
                    <div className="col_wrapper">
                        <div className="cta_title">{value.cta_title}</div>
                        <div className="cta_subtitle">
                            <div className="col">
                                <div>
                                    <a className="contacts" href="tel:+380955414020">
                                        <svg className="svg">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                        <span> +38 095 541 40 20</span>
                                    </a>
                                    <span>{value.or}</span>
                                    <a className="contacts" href="viber://chat?number=380955414020">
                                        Viber
                            </a>
                                </div>

                                <div><a className="contacts" href="mailto: luchik.project@gmail.com">
                                    <svg className="svg">
                                        <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
                                    </svg>
                                    <span> luchik.project@gmail.com</span>
                                </a></div>
                                <div><a className="contacts" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/LanaLuchikSport/">
                                    <svg className="svg">
                                        <path fill="currentColor" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                                    </svg>
                                    <span> FB.com/LanaLuchikSport/</span>
                                </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </LangContext.Consumer>
    );
}

export default CTA;
