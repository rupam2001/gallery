import React, { useEffect, useState, useLayoutEffect } from 'react'
import { Link as SmoothLink, animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';

import './Menu.css';
import { Li } from 'evergreen-ui';

const Menu = () => {

    return (

        <div className="navmenu container-fluid">
            <div className="row">
                <div className="col">
                    HOME
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <SmoothLink
                        activeClass="active"
                        to="vision"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >VISION</SmoothLink>

                </div>
            </div>
            <div className="row">
                <div className="col">
                    <SmoothLink
                        activeClass="active"
                        to="my-work"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >MY WORK</SmoothLink>

                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Link to="/contact">CONTACT</Link>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Link to="/about">ABOUT</Link>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    LOREM
                </div>
            </div>
        </div>
    )
}

export default Menu