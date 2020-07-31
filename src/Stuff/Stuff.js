import React from 'react';
import './Stuff.css';

import { LangContext } from '../LangContext';

function Stuff() {
    return (
        <LangContext.Consumer>
            {(value) => (

                <div className="stuff">
                    <div className="faq_title">{value.stuff_1_title}</div>
                    <div className="faq_subtitle">
                        <ul>
                            <li>{value.stuff_1_text_1}</li>
                            <li>{value.stuff_1_text_2}</li>
                            <li>{value.stuff_1_text_3}</li>
                        </ul>
                    </div>

                    <div className="faq_title">{value.stuff_2_title}</div>
                    <div className="faq_subtitle">{value.stuff_2_text}</div>

                    <div id="stuff_1">
                        <div className="row" id="stuff_row">
                            <div className="col-lg-7">
                                <div className="table_col">

                                    <div className="faq_title">{value.stuff_3_title}</div>
                                    <div className="faq_subtitle">{value.stuff_3_text}</div>

                                    <div className="faq_title table">{value.stuff_4_title}</div>
                                    <div className="faq_subtitle table">{value.stuff_4_text}</div>

                                    <div className="faq_title">{value.stuff_5_title}</div>
                                    <div className="faq_subtitle">{value.stuff_5_text}</div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="stuff_pic_1">
                                    <img className="bigpicture" src={require("./coach_gym_women_new457px.jpg")} alt="" height="auto" max-width="100%"></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="faq_title">{value.stuff_6_title}</div>
                    <div className="faq_subtitle">
                        <ul>
                            <li>{value.stuff_6_text_1}</li>
                            <li>{value.stuff_6_text_2}</li>
                        </ul>
                    </div>

                    <div id="stuff_3">
                        <div className="row" id="stuff_row">
                            <div className="col-lg-7">
                                <div className="table_col">
                                    <div className="faq_title table">{value.stuff_7_title}</div>
                                    <div className="faq_subtitle table">{value.stuff_7_text}</div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="stuff_pic_2">
                                    <img className="bigpicture" src={require("./bread-breakfast-coffee-374052_457px.jpg")} alt="" height="auto" max-width="100%"></img>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="faq_title">{value.stuff_8_title}</div>
                    <div className="faq_subtitle">{value.stuff_8_text}</div>

                </div >
            )}
        </LangContext.Consumer>
    );
}

export default Stuff;