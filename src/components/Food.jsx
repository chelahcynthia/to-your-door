import React, { useState, useEffect }  from "react";
import { Link} from "react-router-dom"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import "./Food.css";
import { CardGroup } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Food(props) {

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
{/*   
 
       {foodData.map((food)=>
     

<Card>
<Card.Body >

  
  <Card.Title className="tp-left">{food.mealName}</Card.Title>
 
  <Card.Subtitle className="mb-2 text-muted tp-right">Price: {food.price}</Card.Subtitle>
  <Card.Img variant="top" src={food.path} />
  <Card.Text>
    {food.description}
  </Card.Text>
  <Card.Text>{food.image}</Card.Text>
  <input type="text" />
  <Card.Link href="#">Add to Cart</Card.Link>


  

</Card.Body>
</Card>

// this one has rows



       )} 
         {foodData.map((food)=>
         <Container>
    <Row md={2}>
      
        <Col md={6}>
     
          
        </Col>
    
    </Row>

         </Container>

         )} */}

    
     
         
            
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
                  <a href="/cart">
                    <Button variant="secondary">ADD TO CART</Button>
                  </a>
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