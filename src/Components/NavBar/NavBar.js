import React, { useEffect, useState, useLayoutEffect } from 'react'

import './NavBar.css';

const NavBar = () => {

    const [navPosition, setnavPosition] = useState('absolute');
    const [navTop, setnavTop] = useState('6rem');

    // useEffect(() => {
    //     if (isBrowser) {
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

            <div className="navBar container-fluid realNav animated fadeIn slow delay-4s" id='nav'>
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
    )
}

export default NavBar