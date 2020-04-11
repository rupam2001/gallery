import React from 'react'
import Tilt from 'react-parallax-tilt';

import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';
import TiltCard from '../TiltCard/TiltCard';

import './Landing.css';

const Landing = () => {
    return (
        <div className='landing'>
            <div className='section-hero'>
                <NavBar />
                <Hero />
            </div>
            <div className="section-vision animated fadeIn delay-4s">
                <div className="shadow-heading">
                    <h1>ARTIST'S VISION</h1>
                    <h1 className='shadow-text'>ARTIST'S VISION</h1>
                </div>
                <div className="container my-4 pt-4">
                    <div className="row main">
                        <div className="col-5 d-flex align-items-center justify-content-end">
                            <div className="photo">
                                <img src="https://i.picsum.photos/id/1005/300/400.jpg" alt="" className="shadow" />
                                <Tilt
                                    // className="parallax-effect-glare-scale"
                                    glareEnable={false}
                                    tiltReverse={true}
                                    transitionSpeed={10000}
                                    trackOnWindow={true}
                                // style={{ backgroundImage: 'url(https://picsum.photos/id/101/500/500)' }}
                                >
                                    <img className="shadow-photo" src="https://i.picsum.photos/id/1005/300/400.jpg" alt="" />
                                </Tilt>

                            </div>

                        </div>
                        <div className="col-7 d-flex align-items-center justify-content-start pl-4">
                            <span className="text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quod aut porro enim fugit numquam vero inventore quisquam provident, qui delectus itaque officia obcaecati ea voluptatem, laudantium facilis eveniet! Iste! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita illo ut nobis quod officia adipisci iusto autem perferendis voluptas delectus? Quo voluptates, nihil eaque tempora quibusdam eveniet dignissimos! Quam, accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut pariatur maxime iste illo neque iure tempore veniam nemo magni tempora ad eaque voluptas, eum sit excepturi placeat doloribus. Unde, harum.
                            </span>

                        </div>
                    </div>
                </div>

            </div>
            <div className="section-showcase show-1 animated fadeIn delay-4s">
                <div className="shadow-heading">
                    <h1>TITTLE OF SERIES</h1>
                    <h1 className='shadow-text'>TITTLE OF SERIES</h1>
                </div>
                <div className="container pt-4 mt-4">
                    <div className="row py-4">
                        <div className="col d-flex align-items-center justify-content-center">
                            <TiltCard/>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <TiltCard/>
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="col d-flex align-items-center justify-content-center">
                            <TiltCard/>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <TiltCard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing