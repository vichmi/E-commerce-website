import React, {useState, useEffect} from 'react'
import {getProducts} from '../utils/cart';

export default function DotNumber() {
  const [items, setItems] = useState([]);

  useEffect(() => {
      setInterval(() => {
          setItems(getProducts());
      }, 100);
  }, []);
  return (
    <div className='position-absolute ml-4'>
        <span style={{color: 'red'}}>{items.length}</span>
    </div>
  )
}
