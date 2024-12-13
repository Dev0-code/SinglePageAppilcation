import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
     <div className='mt-5 p-5 container'>
         <div className='mt-5 justify-content-center align-items-center'>
             <Container fluid>
              <Row>
                <Col>
                <h3>React Router</h3>
                <p>React Router is a library for handling routing and navigation in React JS Applications. It allows you to create dynamic routes providing a seamless user experience by mapping various URLs to components. It enables navigation in single-page application (SPA) without refreshing the entire page.</p>
                <Link to={'/about'} className='btn btn-success'>To know more</Link>
                </Col>
                <Col>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy44stqoJx4us9tCMcZ-khYzdm6chhTkZg2w&s" className='img-fluid' alt="" /></Col>
              </Row>
            </Container>
         </div>
     </div>
    </>
  )
}

export default Home
