import React, { useEffect, useState, useLayoutEffect } from 'react'
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

import './NavBar.css';

const NavBar = () => {

    const [navPosition, setnavPosition] = useState('absolute');
    const [navTop, setnavTop] = useState('6rem');

    useEffect(() => {
        if(isBrowser){
            var remember;
            let isRemembered = false;
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                let nav = document.getElementById('nav');
                let distanceToTop = nav.getBoundingClientRect().top;
                if (distanceToTop === 0 && !isRemembered) {
                    remember = scrolled;
                    isRemembered = true;
                    console.log('GOT IT', scrolled);
                }
                if (distanceToTop <= 0) {
                    setnavPosition('fixed')
                    setnavTop('0')
                }
                if (scrolled <= remember) {
                    setnavPosition('absolute')
                    setnavTop('6rem')
                }
            });
        }
            
    }, []);

    return (

        <div className='navBar '>
            {isBrowser ?
                (
                    <div>
                        <div className="container-fluid animated fadeIn slow delay-4s">
                            <div className="row py-4 mx-4 mx-4 px-4">
                                <div className="col-4 text-left d-flex align-items-end social">
                                    <div className="col-2">
                                        <i class="fab fa-twitter"></i>
                                    </div>
                                    <div className="col-2">
                                        <i class="fab fa-instagram"></i>
                                    </div>
                                    <div className="col-2">
                                        <i class="fab fa-dribbble"></i>
                                    </div>
                                </div>
                                <div className="col-4 text-center">
                                    <h1>NITYA SONI</h1>
                                </div>
                                <div className="col-4 text-right d-flex align-items-end justify-content-end">
                                    example@example.com
                   </div>
                            </div>
                        </div>
                        <div className="spacer">

                        </div>
                        <div className="container-fluid realNav animated fadeIn slow delay-4s" id='nav' style={{ position: navPosition, top: navTop }}>
                            <div className="row py-1" style={{ padding: '0 4vw' }} >
                                <div className="col py-1 center">
                                    HOME
                           </div>
                                <div className="col py-1 center">
                                    VISSION
                           </div>
                                <div className="col py-1 center">
                                    MY WORK
                           </div>
                                <div className="col py-1 center">
                                    CONTACT
                           </div>
                                <div className="col py-1 center">
                                    ABOUT
                           </div>
                                <div className="col py-1 center">
                                    LOREM
                           </div>

                            </div>
                        </div>
                    </div>
                )
                :
                (
                    <></>
                )
            }

        </div>
    )
}

export default NavBar