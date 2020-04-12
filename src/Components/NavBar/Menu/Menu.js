import React, { useEffect, useLocation, useState } from 'react'
import { Link as SmoothLink, animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';

import './Menu.css';
import { Li } from 'evergreen-ui';

const Menu = ({ collapse, show }) => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        //collapse nav-items on click
        let elements = document.getElementsByClassName("nav-item");
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", () => { collapse() }, false);
        }
    }, []);

    return (
        <div className="navmenu container-fluid">
            <div className="row nav-item">
                <div className="col">
                    <span className="nav-item">
                        {window.location.pathname === "/" ? (
                            <span onClick={scrollToTop}>HOME</span>
                        ) : (
                                <Link to="/">HOME</Link>
                            )}
                    </span>

                </div>
            </div>
            <div className="row nav-item">
                <div className="col">
                    {window.location.pathname === "/" ? (
                        <SmoothLink
                            activeClass="active"
                            to="vision"
                            spy={true}
                            smooth={true}
                            delay={1000}
                            offset={0}
                            duration={500}
                        >
                            <span className="nav-item">VISION</span>
                        </SmoothLink>
                    ) : (
                            <a href="/#vision"><span className="pointer">VISION</span></a>
                        )}

                </div>
            </div>
            <div className="row nav-item">
                <div className="col">
                    {window.location.pathname === "/" ? (
                        <SmoothLink
                            activeClass="active"
                            to="my-work"
                            spy={true}
                            smooth={true}
                            offset={0}
                            delay={1000}
                            duration={500}
                        >
                            <span className="nav-item">MY WORK</span>
                        </SmoothLink>
                    ) : (
                            <a href="/#my-work"><span className="pointer">MY WORK</span></a>
                        )}


                </div>
            </div>
            <div className="row  nav-item">
                <div className="col">
                    <Link to="/contact">
                        <span className="nav-item">CONTACT</span>
                    </Link>
                </div>
            </div>
            <div className="row  nav-item">
                <div className="col">
                    <Link to="/about">
                        <span className="nav-item">ABOUT</span>

                    </Link>
                </div>
            </div>
            <div className="row  nav-item">
                <div className="col">
                    <span className="nav-item">LOREM</span>

                </div>
            </div>
        </div>
    )
}

export default Menu