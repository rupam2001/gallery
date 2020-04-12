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
                <div className="background-container">
                    <div className="background">
                    </div>
                </div>
                <div className="mobile">
                    <h1 className="mQuote">
                        <span className="start">"</span>
                        Its not about <br/>skills. Its about <br/>thoughts.
                        <span className="end">"</span>
                   </h1>
                   <div className="text-center">
                       <h2 className="mName">-Nitya Soni</h2>
                   </div>
                </div>

            </div>
        </React.Fragment>

    )
}

export default Hero