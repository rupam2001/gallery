import React from 'react'

import './Quote.css';

const Quote = ({ quote, name }) => {
    return (
        <div className='quote'>
            <div className='container'>
                <div className="row justify-content-start">
                    <div className="col text-left">
                        <h1>
                            <i className='fas fa-quote-left' />
                        </h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6 noPadding text-center">
                        <h1 className='display-1 text-justify main'>
                            {quote}
                        </h1>
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col text-right">
                        <h1>
                            <i className="fas fa-quote-right" />
                        </h1>
                    </div>
                </div>
                <h1 className='text-right mt-4 pr-4 mr-4' style={{color:'#696802'}}>- {name}</h1>
            </div>
        </div>
    )
}

export default Quote