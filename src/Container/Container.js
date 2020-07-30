import React from 'react';
import './Container.css';
import Home from '../Home/Home';
import TopButton from '../TopButton/TopButton';
import Services from '../Services/Services';
import CTA from '../CTA/CTA';
import Stuff from '../Stuff/Stuff';
import About from '../About/About';


function Container() {
    return (
        <div className="Container">
            <Home />
            <Services />
            <TopButton scrollStepInPx='50' delayInMs='16.66' />
            <CTA />
            <Stuff />
            <About />
        </div >
    );
}

export default Container;

