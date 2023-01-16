// import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./Food.css";
import { GiOpenBook} from "react-icons/gi";
import React, {useEffect, useState} from "react";

function Food() {

  const [foodData, setFoodData] = useState([])

  const fetchData = () => {
    fetch("http://localhost:9000/meals")
    .then((res) => res.json())
    .then((data) =>
    setFoodData(data));
  };
  useEffect(() => {
    fetchData(foodData);
  }, []);


  return (
    <>
    <h2 className='food-heading'> Menu <GiOpenBook/> </h2>
      {/* <Row xs={1} md={2} className="g-4">
            {foodData.map((foodData) =>
          
            <Col key = {foodData.id} foodData = {foodData}>
              <Card className="food-card">
            <Card.Img src={foodData.path} />
            <Card.Body>
            <Card.ImgOverlay>
              <Card.Title className="title-color">{product.mealName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted subtitle-color">Price: {product.price}</Card.Subtitle>
              
              <Card.Text className="text-color">
               {product.description}
              </Card.Text>
              <Card.Text className="food-cat">{product.category}</Card.Text>
                  <Form>
                  <Form.Group className="quantity-box">
                    <div className="order-action">
                    <Form.Control type="number" placeholder="QTY"></Form.Control>
                    
                    <Button variant="secondary" >ADD TO CART</Button>
                 
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
              </Row> */}
    </>
  );
}
export default Food;
