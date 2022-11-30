import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import {addProduct} from '../utils/cart';

export default function Product() {
    let location = useLocation();
    const [product, setProduct] = useState({});

    useEffect(() => {
        let productId = location.pathname.split('/')[2];
        axios.get('https://fakestoreapi.com/products/'+productId, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(res => {
            setProduct(res.data);
        })
    }, []);


  return (
    <div className='d-flex justify-content-center mt-5'>
        <div className='d-flex flex-row justify-content-around bg-light p-5' style={{marginTop: 100, width: '70%', maxWidth: 1000}}>
            <div className='' style={{marginRight: 25}}>
                <img src={product.image} alt='product image' style={{maxWidth: 250, maxHeight: 350, width: 'auto'}} />
            </div>
            <div style={{maxWidth: 400}}>
                <div className=''>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>

                    <div className='d-flex flex-row justify-content-between align-items-center'>
                        <p style={{fontSize: 20, color: 'red'}}>{product.price}$</p>
                        <Button variant="danger" onClick={() => {
                            addProduct(product);
                        }}>Buy Now</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
