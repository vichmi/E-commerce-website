import React, {useEffect, useState} from 'react';
import CardComponent from '../components/CardComponent';
import axios from 'axios';
import { CardGroup } from 'react-bootstrap';

export default function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products', {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <CardGroup style={{
        flex: 1,
        justifyContent: 'space-around',
        width: '90%',
        margin: 'auto',
        marginTop: 20
      }}>
        {data.map((product, index) => {
          return (
            <CardComponent key={index} name={product.title} img={product.image} description={product.description} price={product.price} id={product.id} />
          )
        })}
      </CardGroup>
    </div>
  )
}
