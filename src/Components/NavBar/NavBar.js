import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Link as SmoothLink, animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';

import Menu from './Menu/Menu';
import './NavBar.css';

const NavBar = () => {

    const [menuIcon, setmenuIcon] = useState("menu");
    const [hideAnimation, sethideAnimation] = useState("")
    const [showMenu, setshowMenu] = useState(false)

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    // nav utilities
    useEffect(() => {
        //Caching\

        // const hideNav = () => {
        //     nvbr.classList.toggle("hide", true);
        // };
        // const showNav = () => {
        //     nvbr.classList.toggle("hide", false);
        // };

        //hide on scroll
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("nvbr").style.top = "0";
            } else {
                document.getElementById("nvbr").style.top = "-10vh";
            }
            if (currentScrollPos < 10) {
                document.getElementById("nvbr").style.top = "0";
            }
            prevScrollpos = currentScrollPos;
        }

        //collapse nav-items on click
        // for (var i = 0; i < elements.length; i++) {
        //   elements[i].addEventListener("click", collapse, false);
        // }

        // document
        //   .getElementById("cart-icon")
        //   .addEventListener("click", collapse, false);
    }, []);

    const collapse = () => {
        
            setmenuIcon("menu")
            sethideAnimation("--hide")
            setTimeout(() => {
                setshowMenu(false)
            }, 1000)
        console.log('workinggggggggggg');
        
    }

    return (

        <div className="navBar container-fluid realNav d-flex align-items-center justify-content-center shadow-down" id='nav'>
            {/* animated fadeIn slow delay-4s */}
            <div className="mobile container-fluid" id="nvbr">
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
                                    setTimeout(() => {
                                        setshowMenu(false)
                                    }, 1000)
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
                        <i class="fab fa-instagram" />
                    </div>
                </div>
                {showMenu ? (
                    <div className={hideAnimation}>
                        <Menu collapse={collapse}/>
                    </div>
                ) : (<></>)}
            </div>
            <div className="browser">
                <div className="row py-1" style={{ width: '100vw', backgroundColor: 'white' }}>
                    <div className="col py-1 center" style={{ paddingLeft: '0' }}>
                        <Link to="/">
                            <span onClick={scrollToTop} className="pointer">HOME</span>
                        </Link>
                    </div>
                    <div className="col py-1 center">
                        <SmoothLink
                            activeClass="active"
                            to="vision"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            <span className="pointer">VISION</span>
                        </SmoothLink>
                    </div>
                    <div className="col py-1 center">
                        <SmoothLink
                            activeClass="active"
                            to="my-work"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            <span className="pointer">MY WORK</span>

                        </SmoothLink>
                    </div>
                    <div className="col py-1 center">
                        <Link to="/contact">

                            <span className="pointer">CONTACT</span>
                        </Link>

                    </div>
                    <div className="col py-1 center">
                        <span className="pointer">ABOUT</span>

                    </div>
                    <div className="col py-1 center" style={{ paddingRight: '0' }}>
                        <span className="pointer">LOREM</span>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default NavBar