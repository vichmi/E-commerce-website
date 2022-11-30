import React, {useEffect, useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import './CardComponent.css';

function truncate(source, size) {
  return source.length > size ? source.slice(0, size - 1) + "…" : source;
}

export default function CardComponent({name, img, description, link, price, id}) {

  return (
    <div>
      <Card style={{cursor: 'pointer'}} onClick={() => {window.location.href = '/product/'+id}} className='cardContainer'>
        <div className='cardImageContainer'>
          <Card.Img className='cardImage' variant="top" src={img}/>
        </div>
        <Card.Body className='cardBodyContainer'>
          <Card.Title>{truncate(name, 30)}</Card.Title>
          <Card.Text>{truncate(description, 100)}</Card.Text>
          <div className='priceLinkContainer'> 
            <Card.Text style={{fontSize: 20, color: 'red'}}>{price}$</Card.Text>
            <Button style={{marginBottom: 10}} variant="danger" onClick={() => {window.location.href = '/product/'+id}}>Click for More</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
