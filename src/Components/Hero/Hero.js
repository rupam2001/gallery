import React from 'react'

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

import Quote from '../Quote/Quote';
import './Hero.css';

const Hero = ({ imageUrl }) => {
    return (
        <React.Fragment>
            <div className='hero'>
                <div className="background-container animated fadeIn slow delay-3s">
                    <div className="background">
                    </div>
                </div>
                <BrowserView>
                    <div className="qoute animated fadeIn slower delay-1s">
                        <Quote quote={<div>Its not about skills.<br /> Its about thoughts.</div>} name='Nitya Soni' />
                    </div>
                </BrowserView>
                <MobileView viewClassName="mobile">
                    <h1 className="mQuote">
                        <span className="start">"</span>
                        Its not about <br/>skills. Its about <br/>thoughts.
                        <span className="end">"</span>
                   </h1>
                   <div className="text-center">
                       <h2 className="mName">-Nitya Soni</h2>
                   </div>
                </MobileView>

            </div>
        </React.Fragment>

    )
}

export default Hero