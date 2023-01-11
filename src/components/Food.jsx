import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import "./Food.css";

function Food() {
  return (
    <>
      <Card style={{ width: "25rem" }}>
        <Card.Img src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />

        <Card.Body>
          <Card.ImgOverlay>
            <Card.Title className="title-color">Monster Burger</Card.Title>
            <Card.Subtitle  className="subtitle-color">bleeeh</Card.Subtitle>
            <Card.Text className="text-color">
             This burger is filled with caramelized onions a very seasoned patty and pilled with pineapple sauce.
            </Card.Text>
            
            <a href="/cart">
              <Button className="button-style" variant="secondary">add to cart</Button>
            

            </a>
          <Form>
              <Form.Group>
                <Form.Label>Quantity</Form.Label>
              </Form.Group>
              <Form.Control
                type="number"
                placeholder="select quantity">

                </Form.Control>
            </Form>
          </Card.ImgOverlay>
        </Card.Body>
      </Card>
    </>
  );
}

export default Food;
