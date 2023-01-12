import React, { useState, useEffect }  from "react";
import { Link} from "react-router-dom"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./Food.css";
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
  
 
       {foodData.map((food)=>
        

<Card style={{ width: '18rem' }}>
<Card.Body >

  
  <Card.Title>{food.mealName}</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">{food.price}</Card.Subtitle>
  <Card.Text>
    {food.description}
  </Card.Text>
  <Card.Link href="#">Add to Cart</Card.Link>


  

</Card.Body>
</Card>


       )} 



   
    </>
  );
}
export default Food;