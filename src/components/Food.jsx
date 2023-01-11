import React, { useState, useEffect }  from "react";
import { Link} from "react-router-dom"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./Food.css";
function Food(props) {
  const [foodData, setFoodData] = useState([])
  return (
    <>
      <Card style={{ width: "25rem" }}>
        <Card.Img
          className="food-image"
          src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Card.Body>
          <Card.ImgOverlay>
            <Card.Title className="title-color">{props.name}</Card.Title>
            <Card.Subtitle className="subtitle-color">{props.price}</Card.Subtitle>
            <Card.Text className="text-color">
              {props.description}
            </Card.Text>
           
            <Form className="quantity-box">
              <Form.Group>
                <Form.Label>Quantity</Form.Label>
              </Form.Group>
              <Form.Control
                type="number"
                placeholder="select quantity"
              ></Form.Control>
            </Form>
            <a href="/cart">
              <Button variant="secondary">add to cart</Button>
              </a>
          </Card.ImgOverlay>
        </Card.Body>
      </Card>
    </>
  );
}
export default Food;