import React from 'react'

import './Hero.css';

const Hero = ({ imageUrl }) => {

    return (
        <React.Fragment>
            <div className='hero animated fadeIn slow delay-1s'>
                <div className="background-container">
                    <div className="background">
                    </div>
                </div>
                <div className="mobile">
                    <h1 className="mQuote fadeInUp delay-2s">
                        <span className="start">"</span>
                        Its not about <br />skills, its about <br />thoughts.
                        <span className="end">"</span>
                    </h1>
                    <div className="text-center">
                        <h2 className="mName animated fadeInLeft delay-1s slower">-Nitya Soni</h2>
                    </div>
                </div>

            </div>
        </React.Fragment>

    )
}

export default Hero