import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import {getProducts, removeProduct} from '../utils/cart';

export default function Cart() {

  const [items, setItems] = useState(getProducts());

  useEffect(() => {
    setItems(getProducts());
  }, []);
console.log(items);
  return (
    <div style={{textAlign: 'center', width: '100%'}}>
        <h1>Check out</h1>
        <div className='d-flex flex-row justify-content-around' style={{width: '100%'}}>
          <div className='d-flex justify-content-start' style={{justifySelf:'flex-start'}}>

            <form className='bg-light d-flex flex-column' style={{borderRadius: '20px', padding: 40}} >
              <div className='d-flex flex-column justify-content-center' style={{height: '100%'}}>
                <label style={{marginTop: 20}} for="first-name">First name</label>
                <input type='text' name='first-name' id='first-name' placeholder='First name' />
                
                <label for="second-name">Second name</label>
                <input type='text' name='second-name' id='second-name' placeholder='Second name' />
                
                <label for="phone">Phone number</label>
                <input type='text' name='phone' id='phone' placeholder='Phone number' />

                <label for="address">Address</label>
                <input type='text' name='address' id='address' placeholder='Address' />
              </div>
              <div className='d-flex justify-content-center' style={{marginBottom: 50}}>
                <Button type='submit'>Order</Button>
              </div>
            </form>

          </div>

          <div className='d-flex' style={{justifySelf:'flex-end'}}>
            <div className='bg-light' style={{height: '50vh', borderRadius: '20px', padding: 20}}>
              {items.length == 0 ? <>No items</>: items.map((item, index) => {
                return (
                  <div key={index}>
                    <img src={item.image} style={{marginLeft: 5, marginTop: 5, marginBottom: 5}} width={40} height={50} />
                    <span>{truncateString(item.title, 50)}</span>
                    <Button onClick={() => {
                      removeProduct(item);
                      setItems(getProducts())
                    }} variant='danger'>X</Button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
    </div>
  )
}


function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}