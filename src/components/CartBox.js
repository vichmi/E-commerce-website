import { Button } from 'react-bootstrap';
import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import { removeProduct, getProducts } from '../utils/cart';

export default function CartBox() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        setInterval(() => {
            setItems(getProducts());
        }, 100);
    }, []);

  return (
    <div className='bg-light border d-flex flex-column' style={{width:400, position: 'fixed',  zIndex: 100, marginTop: 20, marginLeft: -13}}>
        {items.length == 0 ? <p className='d-flex justify-self-center align-self-center mt-3' style={{fontSize: 18}}>No items were found</p> : <div style={{maxHeight: 300}} className='d-flex flex-column overflow-auto w-100' >
            {items.map((item, index) => {
                return (
                    <div className='d-flex w-100 justify-content-between align-items-center' key={index}>
                        <img src={item.image} style={{marginLeft: 5, marginTop: 5, marginBottom: 5}} width={40} height={50} />
                        <span>{truncateString(item.title, 30)}</span>
                        <Button style={{marginRight: 5}} variant="danger" onClick={() => {
                            removeProduct(item);
                            setItems(getProducts());
                        }}>X</Button>
                    </div>
                )
            })}
            

            <Button onClick={() => {
              window.location.href = '/cart'
            }} style={{marginTop: 10, marginRight: 10, marginBottom: 10, width: 100, alignSelf: 'flex-end'}}>Check out</Button>
            </div>
            }
            
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