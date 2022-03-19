import React from 'react';
import ReactModals from '../ReactModals/ReactModals';

const SingleProdcut = (props) => {
    const { setCartCount} = props
    const { title, image, price} = props.product;
    return (
        <div data-aos="zoom-in" className='col-12 col-md-4 col-sm-6 col-lg-4'>
            <div className="card p-3 ">
                <div>
                    <img src={image} className="w-50 h-50" alt="" />
                    <h2 className='my-2'>{title.slice(0, 10)}</h2>
                    <h3 className='mb-3'>Price { price}</h3>
                </div>
                <div>
                    <div className="d-flex justify-content-around">
                        <button onClick={setCartCount} className='btn btn-primary me-2'>Add Cart</button>
                        {/* <button className='btn btn-info me-2'>Details</button> */}
                        <ReactModals product={props.product}></ReactModals>
                        <button className='btn btn-danger '>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProdcut;