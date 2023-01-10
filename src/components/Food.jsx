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
              This Monster Burger is piled high with fresh sliced tomatoes, a
              mango and avocado topping plus a hash brown patty! And if that
              wasn’t enough a surprise spicy mayo. There’s no end to the
              delicious layers of flavor!
            </Card.Text>
            <Card.Link href="#">
              <Button variant="primary">order now</Button>
            </Card.Link>
            <Form>
              <Form.Group>
                <Form.Label>Quantity</Form.Label>
              </Form.Group>
              <Form.Control
                type="number"
                placeholder="select quantity"
                htmlSize={5}

              ></Form.Control>
            </Form>
          </Card.ImgOverlay>
        </Card.Body>
      </Card>
    </>
  );
}

export default Food;
