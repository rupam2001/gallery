import React from 'react'

import Quote from '../Quote/Quote';
import './Hero.css';

const Hero = ({ imageUrl }) => {
    return (
        <div className='hero'>
            <div className="background-container animated fadeIn slow delay-3s">
                <div className="background">
                </div>
            </div>
            <div className="qoute animated fadeIn slower delay-1s">
                <Quote quote={<div>Its not about skills.<br/> Its about thoughts.</div>} name='Nitya Soni'/>
            </div>
            
        </div>
    )
}

export default Hero