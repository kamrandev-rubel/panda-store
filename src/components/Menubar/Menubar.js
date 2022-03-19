import React, { useState } from 'react';
import Test from '../Test/Test';
import './Menubar.css'

const Menubar = (props) => {
    return (
        <div className='container'>
            <div className='row py-3 '>
                <div className='col-12 col-sm-1 col-md-2 col-lg-2 fw-bold logo '>Logo</div>
                <ul className='col-12 col-sm-11 col-md-10 col-lg-12 list-item list-unstyled'>
                    <li className='ms-4 fw-bold'>Home</li>
                    <li className='ms-4 fw-bold'>Products</li>
                    <li className='ms-4 fw-bold'>Cart <sup className='text-primary fs-4'>{props.count}</sup></li>
                    <li className='ms-4 fw-bold'>About</li>
                </ul>
            </div>
        </div>
    );
};

export default Menubar;