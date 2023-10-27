import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import loading from "../../Assets/Projects/loading.png";
import zuri from "../../Assets/Projects/zuri.png";
import formailer from "../../Assets/Projects/formailer.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zuri}
              isBlog={false}
              title="Zuriportfolio"
              description="Web Application for developers and tech stakeholders to share resources, market products, gain employment, connect and hangout with friends build with React.js, Typescript, and PostgreSQL. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages, marketplace, portfolio hosting."
              ghLink="https://github.com/hngx-org/zuriportfolio-frontend"
              demoLink="https://zuriportfolio-frontend-pw1h.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={formailer}
              isBlog={false}
              title="Formailer"
              description="Formailer is a successful Open-Source project that I created as a feature on the backend of any web application that utilizes a contact form to receive feedback from users or visitors."
              ghLink="https://github.com/DimTony/Formailer"
              demoLink="https://dimtony.github.io/Formailer/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loading}
              isLoading={true}
              title="Loading..."
              description="Stay tuned as there are more projects in the pipe..."
              // ghLink="https://github.com/DimTony"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
