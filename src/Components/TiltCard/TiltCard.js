import React from 'react'
import Tilt from 'react-parallax-tilt';

import './TiltCard.css';

const TiltCard = ({imageUrl}) => {
    return (
        <Tilt
            className="tilt parallax-effect-glare-scale"
            // perspective={900}
            glareEnable={true}
            glareMaxOpacity={0.5}
            glarePosition="all"
            // scale={1.02}
            tiltReverse={true}
            tiltMaxAngleX={('Max tilt - x axis', 15)}
            tiltMaxAngleY={('Max tilt - y axis', 15)}
            transitionSpeed={10000}
        // style={{ backgroundImage: 'url(https://picsum.photos/id/101/500/500)' }}
        >
            <img src={imageUrl}></img>
            {/* <div className="gradient"></div> */}
            <div className="inner-element">
                <h1>name</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt ut magnam impedit? Voluptates iste ipsum quisquam</p>
            </div>
        </Tilt>
    )
}

export default TiltCard
