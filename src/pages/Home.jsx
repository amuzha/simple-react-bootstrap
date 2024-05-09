import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageTitle from '../components/PageTitle';
import Carousel from '../components/Carousel';
import DiscoverBtn from '../components/DiscoverBtn';

import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/Home.css';

function Home(props) {
  const images = [
    'https://i.pinimg.com/564x/12/19/91/121991a40151cf3ad47ae68d0eae3cf9.jpg',
    'https://i.pinimg.com/564x/d9/39/bc/d939bc3dd5256a089cfbf07bbcf3320e.jpg',
    'https://i.pinimg.com/564x/9f/51/26/9f51261d77b50a4fafb8d14a961e9814.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      <PageTitle title="Home" />
      <section id="hero">
        <Container fluid style={{ backgroundImage: `url(${images[currentIndex]})` }} className="home banner d-flex justify-content-center align-items-center text-center">
          <Row>
            <Col lg={12}>
            <h1 className="text-light">Welcome to {props.siteName}</h1>
            </Col>
            <Col>
              <DiscoverBtn destinationId="profile" />
            </Col>
          </Row>
        </Container>

        <Container className="py-5">
          <Carousel />
        </Container>
      </section>

      <section id="profile" className="py-5 my-5">
        <Container>
          <h1 className="text-center">Hai Hello</h1>
        </Container>
      </section>
    </>
  );
}

export default Home;
