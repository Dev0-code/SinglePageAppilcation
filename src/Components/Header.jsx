import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
     <Navbar className="bg-body-tertiary shadow">
      <Container>
        <Navbar.Brand href="#home">React Router</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Link className='btn' to={'/'}>Home</Link>
          <Link className='btn' to={'/about'}>About</Link>
          <Link className='btn' to={'/contact'}>Contact</Link>
            <button className='btn btn-outline-primary'>Login</button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
