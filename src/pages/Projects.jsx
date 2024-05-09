
import { Container } from 'react-bootstrap'

function Projects() {
  return (
    <>
        <section id="hero">
            <Container fluid className="projects banner d-flex justify-content-center align-items-center">
              <h2 className="text-center text-light">My Projects</h2>
            </Container>
        </section>
    </>
  );
}

export const pageTitle = "My Projects";
export default Projects;