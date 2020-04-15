import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Link as SmoothLink, animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';

import Menu from './Menu/Menu';
import './NavBar.css';
import { Li } from 'evergreen-ui';

const NavBar = () => {

    const [menuIcon, setmenuIcon] = useState("menu");
    const [hideAnimation, sethideAnimation] = useState("");
    const [showMenu, setshowMenu] = useState(false);
    const [move, setmove] = useState("");
    const [nityaLogo, setnityaLogo] = useState("nitya-logo --logo-hide");

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    // nav utilities
    useEffect(() => {

        let notified = false;
       
        //show logo
       window.addEventListener('scroll', () => {
           const scrollable = document.documentElement.scrollHeight - window.innerHeight;
           const scrolled = window.scrollY;
           const percent = (scrolled/scrollable) * 100;
           if(percent > 5) {
               setmove("--move");
               setnityaLogo("nitya-logo --logo-show")
           } else {
            setmove("");
            setnityaLogo("nitya-logo --logo-hide")
           }
       })

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

    }, []);

    const collapse = () => {

        setmenuIcon("menu")
        sethideAnimation("--hide")
        setTimeout(() => {
            setshowMenu(false)
        }, 1000)

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
                        <Menu collapse={collapse} />
                    </div>
                ) : (<></>)}
            </div>
            <div className="browser animated fadeIn slow">
            <h1 className={nityaLogo}>LOGO</h1>
                <div className={`row py-1 ` + move} style={{ width: '100vw'}}>
                    <div className="col py-1 center hover" style={{ paddingLeft: '0' }}>
                        <Link to="/">
                            <span onClick={scrollToTop} className="pointer">HOME</span>
                        </Link>
                    </div>
                    <div className="col py-1 center hover">
                        {window.location.pathname === "/" ? (
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
                        ) : (
                                <a href="/#vision"><span className="pointer">VISION</span></a>
                            )}
                    </div>
                    <div className="col py-1 center hover">
                        {window.location.pathname === "/" ? (
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
                        ) : (
                                <a href="/#my-work"><span className="pointer">MY WORK</span></a>
                            )}
                    </div>

                    <div className="col py-1 center hover">
                        <span className="pointer">ALL PAINTINGS</span>
                    </div>

                    <div className="col py-1 center hover">
                        <Link to="/contact">
                            <span className="pointer">CONTACT</span>
                        </Link>

                    </div>
                    <div className="col py-1 center hover" style={{ paddingRight: '0' }}>
                        <Link to="/about">
                            <span className="pointer">ABOUT</span>
                        </Link>

                    </div>
                   
                </div>
            </div>

        </div>
    )
}

export default NavBar