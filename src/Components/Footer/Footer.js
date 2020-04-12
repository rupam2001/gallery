import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CornerDialog } from 'evergreen-ui';
import { Link as SmoothLink, animateScroll as scroll } from "react-scroll";

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

import './Footer.css'

const Footer = () => {

    const [showAurinDialog, setshowAurinDialog] = useState(false);

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
                            <span onClick={() => { setshowAurinDialog(true) }} className="pointer">
                                © Website developed and maintained by <span className="text-light">AURIN</span>
                            </span>
                        </div>
                        <div className="col text-right pointer" onClick={()=>{scroll.scrollToTop()}}>
                            GO TO TOP
                    </div>
                    </div>
                </div>
            ) : (
                    <div className="container-fluid" style={{ backgroundColor: 'rgb(75, 75, 75)', color: 'rgb(182, 182, 182)' }}>
                        <span onClick={() => { setshowAurinDialog(true) }}>© Website by <span className="text-light">AURIN</span></span>
                        
                    </div>
                )

            }

            <CornerDialog
                title="We’d love to hear from you!"
                isShown={showAurinDialog}
                onCloseComplete={() => {setshowAurinDialog(false)}}
                confirmLabel = "Visit Us"
                onConfirm = {() => {window.open("https://www.instagram.com/aurinassam/", "_blank");}}
            >
                Hi, this site is creaeted by AURIN.
                If you’re willing to provide feedback or get in touch, let’s chat.
      </CornerDialog>

        </React.Fragment>
    )
}

export default Footer