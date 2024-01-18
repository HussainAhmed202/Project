//import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CustomCard({questionID, title, body }) {
  return (
    <Card>
      <Card.Body style={{color:"black"}}>
        <Link to={`/challenges/${questionID}`}><Card.Title style={{fontSize:"x-large"}}>{title}</Card.Title></Link > 
        <Card.Text style={{fontSize:"medium"}}>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;