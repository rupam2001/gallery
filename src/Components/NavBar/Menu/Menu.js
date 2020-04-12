import React, { useEffect, useState, useLayoutEffect } from 'react'

import './Menu.css';

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
                    VISION
                </div>
            </div>
            <div className="row">
                <div className="col">
                    MY WORK
                </div>
            </div>
            <div className="row">
                <div className="col">
                    CONTACT
                </div>
            </div>
            <div className="row">
                <div className="col">
                    ABOUT
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