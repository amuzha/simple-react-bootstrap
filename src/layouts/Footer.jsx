import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Config from '../Config';

import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import '../assets/css/Footer.css'

function Footer(props) {
  const [data, setData] = useState('');

  useEffect(() => {
    // Load data from localStorage when the component mounts
    const savedData = localStorage.getItem('myData');
    if (savedData) {
      setData(savedData);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted and stored in localStorage with value: ', data);
    alert(`Form submitted and stored in localStorage with value: ${data}`);
    setData(data);
    localStorage.setItem('myData', data);
  }

  const handleChange = (event) => {
    const newData = event.target.value;
    setData(newData);
    console.log('Data change: ', newData);
  };

  return (
    <div className="d-flex flex-column h-100">

        <footer className="w-100 py-4 flex-shrink-0 bg-dark">
            <Container className="py-4">
                <Row className="gy-4 gx-5">
                    <Col lg={4} md={6}>
                        <Link to="/"><h5 className="h1 text-white">{props.siteName}.</h5></Link>
                        <p className="small muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                        <p className="small muted mb-0">&copy; Copyright 2024 {props.siteName}. All rights reserved.</p>
                    </Col>
                    <Col lg={2} md={6}>
                        <h5 className="text-white mb-3">Quick links</h5>
                        <ul className="list-unstyled muted">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </Col>
                    <Col lg={2} md={6}>
                    <h5 className="text-white mb-3">About Us</h5>
                        <ul className="list-unstyled muted">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/career">Career</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </Col>
                    <Col lg={4} md={6}>
                        <p className="small muted mt-5 mb-0">No. WhatsApp: { Config.phoneNumber }</p>
                        <p className="small muted">Instagram: <Link to={ Config.instagramLink } className="text-reset">{ Config.instagramUsername }</Link></p>
                        <Form onSubmit={handleSubmit}>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    value={data}
                                    onChange={handleChange}
                                />
                                <Button variant="primary" id="button-addon2" type="submit"><FontAwesomeIcon icon={faPaperPlane} /></Button>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </footer>

    </div>
  )
}

export default Footer