import React, { useEffect } from 'react'

import './Preview.css';

const Preview = ({ url, close }) => {

    useEffect(() => {
        document.getElementById("body").style.overflowY = "hidden";
        console.log(url);
    }, [])

    return (
        <div className='preview animated fadeIn'>
            <div className="container-fluid">
                <div className="row my-4 img-row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <div className="img-loader d-flex justify-content-center align-items-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>

                        <img src={url} alt="" className="image" />
                    </div>
                </div>
                <div className="close-btn pointer"
                    onClick={() => {
                        close();
                        document.getElementById("body").style.overflowY = "scroll"
                    }}
                >X</div>
                <div className="inner">
                    <span>i</span>
                    <h1>TITLE OF PAINTING</h1>
                    <p>Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores perferendis consequuntur ipsam ab, quia at inventore sed.</p>
                    <p>Oil on panel</p>
                    <p>Size: 20" X 20"</p>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="only-mobile">
                            <h1>TITLE OF PAINTING</h1>
                            <p>Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores perferendis consequuntur ipsam ab, quia at inventore sed.</p>
                            <p>Oil on panel</p>
                            <p>Size: 20" X 20"</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary close-btn-mobile" onClick={() => {
                        close();
                        document.getElementById("body").style.overflowY = "scroll"
                    }}>BO BACK</button>
                </div>
            </div>
        </div>
    )
}

export default Preview