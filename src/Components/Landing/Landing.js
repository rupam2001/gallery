import React, {useState} from 'react'
import {CornerDialog, Button} from 'evergreen-ui'

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

import Hero from '../Hero/Hero';
import TiltCard from '../TiltCard/TiltCard';
import './Landing.css';

const Landing = () => {

    return (
        <div className='landing'>
            <Hero />
            <div className="section-vision animated fadeIn" id="vision">
                <div className="shadow-heading">
                    <h1>ARTIST'S VISION</h1>
                    <h1 className='shadow-text'>ARTIST'S VISION</h1>
                </div>
                <div className="container my-4 pt-4">
                    <div className="row main">
                        <div className="col-md-5 d-flex align-items-center justify-content-end photo-col">
                            <div className="photo shadow-lg">
                                <img src="https://i.picsum.photos/id/1005/300/400.jpg" alt=""/>
                                    {/* <Tilt
                                        // className="parallax-effect-glare-scale"
                                        glareEnable={false}
                                        tiltReverse={true}
                                        transitionSpeed={10000}
                                        trackOnWindow={true}
                                    // style={{ backgroundImage: 'url(https://picsum.photos/id/101/500/500)' }}
                                    >
                                        <img className="shadow-photo" src="https://i.picsum.photos/id/1005/300/400.jpg" alt="" />
                                    </Tilt> */}
                            </div>

                        </div>
                        <div className="col-md-7 d-flex align-items-center justify-content-start pl-4">
                            <span className="text-justify my-4 py-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quod aut porro enim fugit numquam vero inventore quisquam provident, qui delectus itaque officia obcaecati ea voluptatem, laudantium facilis eveniet! Iste! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita illo ut nobis quod officia adipisci iusto autem perferendis voluptas delectus? Quo voluptates, nihil eaque tempora quibusdam eveniet dignissimos! Quam, accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut pariatur maxime iste illo neque iure tempore veniam nemo magni tempora ad eaque voluptas, eum sit excepturi placeat doloribus. Unde, harum.
                            </span>

                        </div>
                    </div>
                </div>

            </div>
            <div className="section-showcase show-1" id="my-work">
                <div className="shadow-heading">
                    <h1>TITTLE OF SERIES</h1>
                    <h1 className='shadow-text'>TITTLE OF SERIES</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col d-flex align-items-center justify-content-center i1">
                            <TiltCard imageUrl="https://i.picsum.photos/id/101/500/500.jpg"/>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center i2">
                            <TiltCard imageUrl="https://i.picsum.photos/id/143/500/500.jpg"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex align-items-start justify-content-center i3">
                            <TiltCard imageUrl="https://i.picsum.photos/id/300/500/500.jpg"/>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center i4">
                            <TiltCard imageUrl="https://i.picsum.photos/id/104/500/500.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-showcase show-2">
                <div className="shadow-heading">
                    <h1>TITTLE OF SERIES</h1>
                    <h1 className='shadow-text'>TITTLE OF SERIES</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col d-flex align-items-center justify-content-center i1">
                            <TiltCard imageUrl="https://i.picsum.photos/id/101/500/500.jpg"/>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center i2">
                            <TiltCard imageUrl="https://i.picsum.photos/id/143/500/500.jpg"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex align-items-start justify-content-center i3">
                            <TiltCard imageUrl="https://i.picsum.photos/id/300/500/500.jpg"/>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center i4">
                            <TiltCard imageUrl="https://i.picsum.photos/id/104/500/500.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing