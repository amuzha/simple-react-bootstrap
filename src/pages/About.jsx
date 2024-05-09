import React from 'react';

import { Container } from 'react-bootstrap'


function About() {
  return (
    <>
        <section id="hero">
            <Container fluid className="projects banner d-flex justify-content-center align-items-center">
              <h2 className="text-center text-light">About Us</h2>
            </Container>
        </section>
    </>
  );
}

export const pageTitle = "About Us";
export default About;