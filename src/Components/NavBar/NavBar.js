import React, { useEffect, useState, useLayoutEffect } from 'react'

import Menu from './Menu/Menu';
import './NavBar.css';

const NavBar = () => {

    const [navPosition, setnavPosition] = useState('absolute');
    const [navTop, setnavTop] = useState('6rem');
    const [menuIcon, setmenuIcon] = useState("menu");
    const [hideAnimation, sethideAnimation] = useState("")
    const [showMenu, setshowMenu] = useState(false)



    // nav utilities
    // useEffect(() => {
    //     //Caching
    //     let nvbr = document.getElementById("nvbr");
    //     let toggler = document.getElementById("toggler");
    //     let elements = document.getElementsByClassName("nav-item");
    //     let prevScrollpos = window.pageYOffset;

    //     const hideNav = () => {
    //       nvbr.classList.toggle("hide", true);
    //     };
    //     const showNav = () => {
    //       nvbr.classList.toggle("hide", false);
    //     };
    //     const collapse = () => {
    //       // toggler.click();
    //       document.getElementById("navbarMenu").classList.toggle("show", false);
    //     };

    //     //hide on scroll
    //     window.onscroll = () => {
    //       var currentScrollPos = window.pageYOffset;
    //       if (prevScrollpos > currentScrollPos) {
    //         showNav();
    //       } else {
    //         hideNav();
    //       }
    //       if (currentScrollPos < 10) {
    //         showNav();
    //       }
    //       if (!toggler.classList.contains("collapsed")) {
    //         collapse();
    //       }
    //       prevScrollpos = currentScrollPos;
    //     };

    //     //collapse nav-items on click
    //     for (var i = 0; i < elements.length; i++) {
    //       elements[i].addEventListener("click", collapse, false);
    //     }

    //     document
    //       .getElementById("cart-icon")
    //       .addEventListener("click", collapse, false);
    //   }, []);

    return (

        <div className="navBar container-fluid realNav d-flex align-items-center justify-content-center
        
        " id='nav'>
            {/* animated fadeIn slow delay-4s */}
            <div className="mobile container-fluid">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-2 d-flex align-items-center justify-content-center">
                        <div className={menuIcon}
                            onClick={() => {
                                if (menuIcon === "menu") {
                                    setmenuIcon("menu change")
                                    sethideAnimation("")
                                    setshowMenu(true)
                                } else {
                                    setmenuIcon("menu")
                                    sethideAnimation("--hide")
                                    setTimeout(()=> {
                                        setshowMenu(false)
                                    },1000)
                                }
                            }}
                        >
                            <div className="bar1" />
                            <div className="bar2" />
                            <div className="bar3" />
                        </div>
                    </div>
                    <div className="col d-flex align-items-center justify-content-center">
                        <h2 className="logo">NITYA SONI</h2>
                    </div>
                    <div className="col-2 d-flex align-items-center justify-content-center">
                        3
                    </div>
                </div>
                {showMenu ? (
                    <div className={hideAnimation}>
                        <Menu />
                    </div>
                ) : (<></>)}
            </div>
            <div className="browser">
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
}

export default NavBar