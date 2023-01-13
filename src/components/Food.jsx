import React, { useState, useEffect }  from "react";
import { Link} from "react-router-dom"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import "./Food.css";
import { CardGroup } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Food() {

  const [foodData, setFoodData] = useState([])

 
  const fetchData = () => {
    fetch("http://localhost:8000/foods")
      .then((res) => res.json())
      .then((data) =>
      setFoodData(data));
  };
 
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
            <Row xs={1} md={2} className="g-4">
            {foodData.map((food, key) =>
            <Col key={food.id}>
              <Card className="food-card">
            <Card.Img src={food.path} />
            <Card.Body>
            <Card.ImgOverlay>
              <Card.Title className="title-color">{food.mealName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted subtitle-color">Price: {food.price}</Card.Subtitle>
              
              <Card.Text className="text-color">
               {food.description}
              </Card.Text>
                  <Form>
                  <Form.Group className="quantity-box">
                    <div className="order-action">
                    <Form.Control type="number" placeholder="QTY"></Form.Control>
                  <Link to="/cart">
                  <Button variant="secondary">ADD TO CART</Button>
                  </Link>
                    </div>
                 
                  </Form.Group>
                 
                </Form>
              </Card.ImgOverlay>
            </Card.Body>
          </Card>
         <Form>
          
         </Form>
        </Col>
        )}
              </Row>

         
       
           
     
         
      
   
    </>
  );
}
export default Food;