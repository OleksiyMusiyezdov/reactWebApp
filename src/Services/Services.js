import React from 'react';
import './Services.css';
import pic1 from './iconfinder_Streamline-72_185092.png';
import pic2 from '././iconfinder_Streamline-56_185076.png';
import pic3 from './iconfinder_Streamline-61_185081.png';

import { LangContext } from '../LangContext';

function Services() {
    return (

        <LangContext.Consumer>
            {(value) => (

                <div className="services">

                    <div className="col text-center">
                        <div className="services_title">{value.section_title}</div>
                        <div className="services_subtitle">{value.section_subtitle}</div>
                    </div>

                    <div className="row icon_boxes_row">

                        <div className="col-xl-4 col-lg-6">
                            <div className="icon_box">
                                <div className="icon_box_title_container d-flex flex-row align-items-center">
                                    <div className="icon_box_icon">
                                        <img src={pic1} alt=""></img>
                                    </div>
                                    <div className="icon_box_title">{value.icon_box_title_1}</div>
                                </div>
                                <div className="icon_box_text">{value.icon_box_text_1}</div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6">
                            <div className="icon_box">
                                <div className="icon_box_title_container d-flex flex-row align-items-center">
                                    <div className="icon_box_icon">
                                        <img src={pic2} alt=""></img>
                                    </div>

                                    <div className="icon_box_title">{value.icon_box_title_2}</div>
                                </div>

                                <div className="icon_box_text">{value.icon_box_text_2}</div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6">
                            <div className="icon_box">
                                <div className="icon_box_title_container d-flex flex-row align-items-center">
                                    <div className="icon_box_icon">
                                        <img src={pic3} alt=""></img>
                                    </div>
                                    <div className="icon_box_title">{value.icon_box_title_3}</div>
                                </div>
                                <div className="icon_box_text">{value.icon_box_text_3}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </LangContext.Consumer>
    );
}

export default Services;