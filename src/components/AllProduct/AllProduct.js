import React, { useEffect, useState } from 'react';
import SingleProdcut from '../SingleProduct/SingleProdcut';

const AllProduct = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
        .then(data=>setProducts(data))
    }, [products])
    return (
        <div>
            <h1 className='mb-4'>All Products</h1>
            <div className="container mx-auto row">
                {
                    products.map(product => (
                        <SingleProdcut setCartCount={props.setCartCount} key={product.id} product={product}></SingleProdcut>
                    ))
                }
            </div>
        </div>
    );
};

export default AllProduct;