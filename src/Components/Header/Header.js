import React from 'react'

import './Header.css';

const Header = () => {

    return (

        <div className='header animated fadeInDown slow'>
            <div className="container-fluid">
                <div className="row py-4 mx-4 mx-4 px-4">
                    <div className="col-3 text-left d-flex align-items-end social">
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
                    <div className="col-6 text-center">
                        <h1>NITYA SONI</h1>
                    </div>
                    <div className="col-3 text-right d-flex align-items-end justify-content-end">
                        example@example.com
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Header