import React from "react";
import Button from 'react-bootstrap/Button';
import { Routes, Route } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
function Food(){
    return (
        <div>
<CardGroup>
      <Card>
        <Card.Img variant="top" src="./images/face.png" />
        <Card.Body>
          <Card.Title>Fried Chicken</Card.Title>
          <Card.Text>
           This chicken is locally sourced from our patner smallholder farmers.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
         
          <Button variant="primary">Add to Cart</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        <Card.Body>
          <Card.Title>French Fries</Card.Title>
          <Card.Text>
         
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">Add to Cart</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Plain Rice</Card.Title>
          <Card.Text>
          
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">Add to Cart</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
    <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>
</div>
    )
}
export default Food;