import React, { useEffect, useState, useLayoutEffect } from 'react'
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

import './Header.css';

const Header = () => {

    const [navPosition, setnavPosition] = useState('absolute');
    const [navTop, setnavTop] = useState('6rem');

    // useEffect(() => {
    //     if(isBrowser){
    //         var remember;
    //         let isRemembered = false;
    //         window.addEventListener('scroll', () => {
    //             const scrolled = window.scrollY;
    //             let nav = document.getElementById('nav');
    //             let distanceToTop = nav.getBoundingClientRect().top;
    //             if (distanceToTop === 0 && !isRemembered) {
    //                 remember = scrolled;
    //                 isRemembered = true;
    //                 console.log('GOT IT', scrolled);
    //             }
    //             if (distanceToTop <= 0) {
    //                 setnavPosition('fixed')
    //                 setnavTop('0')
    //             }
    //             if (scrolled <= remember) {
    //                 setnavPosition('absolute')
    //                 setnavTop('6rem')
    //             }
    //         });
    //     }

    // }, []);

    return (

        <div className='header'>
            <div className="container-fluid">
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
        </div>
    )
}

export default Header