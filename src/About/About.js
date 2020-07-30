import React from 'react';
import './About.css';
// import gym from './img/Sveta_GYM-0.jpg';
import Footer from '../Footer/Footer';

import { LangContext } from '../LangContext';

function About() {
    return (

        <LangContext.Consumer>
            {(value) => (
                <div className="about">
                    <div className="about_container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="footer_about">
                                    <div className="name">
                                        {value.name}
                                    </div>
                                    <div className="footer_about_text">{value.footer_about_text_1}
                                        <span style={{ color: "white" }}> <b>{value.footer_about_text_2}</b> </span>
                                        {value.footer_about_text_3}
                                        <ul className="foot_list">
                                            <li>{value.foot_list_1}</li>
                                            <li>{value.foot_list_2}</li>
                                            <li>{value.foot_list_3}</li>
                                            <li>{value.foot_list_4}</li>
                                            <li>{value.foot_list_5}</li>
                                            <li>{value.foot_list_6}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 footer_col" id="footer_photo_container">
                                <img className="footer_photo" src={require("./img/Sveta_GYM-0.jpg")} alt="" height="auto" width="100%"></img>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            )}
        </LangContext.Consumer>

    );
}

export default About;