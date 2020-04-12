import React from 'react'
import { Link } from 'react-router-dom'

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

import './Footer.css'

const Footer = () => {
    return (
        <React.Fragment>
            <div className="container-fluid footer">
                <div className="row">
                    <div className="col-md-5 px-4 about">
                        <div>
                            <h1 className="text-left logo">LOGO</h1>
                        </div>
                        <div className="text-justify mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate maiores reprehenderit, laboriosam sunt veniam aliquid.
                    </div>
                    </div>
                    <div className="col-md-4 contact text-left px-4">
                        <div>
                            <h3 className="text-left"><i>Contact</i></h3>
                        </div>
                        <div>
                            <ul>
                                <div>
                                    <li><i className="fas fa-map-marker-alt" />Via Rossini 10, 10136 Turin Italy</li>
                                    <li><i className="fas fa-phone" />Phone: (0039) 333 12 68 347</li>
                                    <li><i className="fas fa-envelope" />Email: hello@domain.com</li>
                                    <li><i className="fab fa-skype" />Skype: you_online</li>
                                </div>
                            </ul>

                        </div>
                    </div>
                    <div className="col-md-3 social px-4">
                        <div>
                            <h3 className="text-left"><i>Follow me on</i></h3>
                        </div>
                        <div className="icons text-left">
                            <i className="fab fa-twitter" />
                            <i className="fab fa-instagram" />
                            <i className="fab fa-dribbble" />
                        </div>
                    </div>
                </div>
            </div>
            {isBrowser ? (
                <div className="container-fluid copyright">
                    <div className="row">
                        <div className="col text-left">
                            <span>
                                © Website developed and maintained by <span className="text-light">AURIN</span>
                            </span>
                        </div>
                        <div className="col text-right">
                            GO TO TOP
                    </div>
                    </div>
                </div>
            ) : (
                    <div className="container-fluid" style={{backgroundColor: 'rgb(75, 75, 75)', color: 'rgb(182, 182, 182)'}}>
                        © Website by <span className="text-light">AURIN</span>
                    </div>
                )

            }

        </React.Fragment>
    )
}

export default Footer