import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Food() {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Monster Burger</Card.Title>
            <Card.Text>
            This Monster Burger is piled high with fresh sliced tomatoes, a mango and avocado topping plus a hash brown patty!  And if that wasn’t enough a surprise spicy mayo.  There’s no end to the delicious layers of flavor!
            </Card.Text>
            <Button variant="primary">order now</Button>
          </Card.Body>
        </Card>
      );
}

export default Food
