
import { Container } from 'react-bootstrap'

function Gallery() {
  return (
    <>
        <section id="hero">
            <Container fluid className="projects banner d-flex justify-content-center align-items-center">
              <h2 className="text-center text-light">My Gallery</h2>
            </Container>
        </section>
    </>
  );
}

export const pageTitle = "Gallery";
export default Gallery;