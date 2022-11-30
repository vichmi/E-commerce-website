import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import {getProducts, removeProduct} from '../utils/cart';

export default function Cart() {

  const [items, setItems] = useState(getProducts());

  useEffect(() => {
    // setItems(getProducts());
  }, []);
console.log(items);
  return (
    <div style={{textAlign: 'center'}}>
        <h1>Check out page </h1>
    </div>
  )
}
