import React, { useState, useEffect } from 'react'
import Tilt from 'react-parallax-tilt';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

import './TiltCard.css';

const TiltCard = ({ imageUrl }) => {

    const [tiltEnable, settiltEnable] = useState(true);
    const [glarePosition, setglarePosition] = useState("all")

    useEffect(() => {
        if (isMobile) {
            settiltEnable(false);
            setglarePosition("")
        }
    }, []);

    return (
        <React.Fragment>
            <BrowserView>
                <Tilt
                    className="tilt parallax-effect-glare-scale"
                    // perspective={900}
                    tiltEnable={tiltEnable}
                    glareEnable={tiltEnable}
                    glareMaxOpacity={0.5}
                    glarePosition={glarePosition}
                    // scale={1.02}
                    tiltReverse={true}
                    tiltMaxAngleX={('Max tilt - x axis', 15)}
                    tiltMaxAngleY={('Max tilt - y axis', 15)}
                    transitionSpeed={10000}
                    style={{ backgroundColor: 'white' }}
                >
                    <img src={imageUrl}></img>
                    {isBrowser ? (
                        <div className="gradient"></div>
                    ) : (<></>)}
                    <div className="inner-element">
                        <h1>NAME</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt ut magnam impedit? Voluptates iste ipsum quisquam</p>
                    </div>
                </Tilt>
            </BrowserView>
            <MobileView>
                    <img src={imageUrl} alt="" style={{width: '85vw', height: 'auto', border: '10px solid white'}} className="shadow-lg"></img>
            </MobileView>
        </React.Fragment>
    )
}

export default TiltCard
