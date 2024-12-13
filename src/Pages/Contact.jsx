import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
     <div className='container mt-5 p-5'>
         <Card className="text-center">
          <Card.Body>
            <Card.Title>Contact</Card.Title><hr/>
            <Card.Text >
             Have a great future!
            </Card.Text>
            <Card.Text >
            mlthk03@gmail.com
            </Card.Text>
            <Card.Text >
             +91 8590448863
            </Card.Text>
            <Link to={'/'} className='btn btn-warning' variant="primary">Home Page</Link>
          </Card.Body>
        </Card>
     </div>
    </>
  )
}

export default Contact
