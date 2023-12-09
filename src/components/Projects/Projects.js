import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kidzone from "../../Assets/Projects/kidzone.png";
import fiverr from "../../Assets/Projects/fiverr.png";
import netflix from "../../Assets/Projects/netflix.png";
import youtube from "../../Assets/Projects/youtube.png";

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
              imgPath={kidzone}
              isBlog={false}
              title="Kidzone"
              description="An online e-commerce MERN application for kids'clothing and accessories. It includes both user andadmin sections, and it features a clean and intuitivedesign. Kids and parents can easily shop for trendyfashion items, while administrators can efficientlymanage products and orders."
              ghLink="https://github.com/ASWIN-PALAYAD/kidzone.git"
              demoLink="https://kidzone.vercel.app/"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fiverr}
              isBlog={false}
              title="Fiverr (clone)"
              description="Developing a Fiverr-inspired application using theMERN stack, complete with a real-time chat feature.This platform allows freelancers to offer their services,while clients can find and hire the right talent. Theintegrated chat functionality enables seamlesscommunication between freelancers and clients,facilitating collaboration and project management."
              demoLink=""
              ghLink="https://github.com/ASWIN-PALAYAD/mern_freelance_job_app.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="A clone of Netflix Web Application, where data is fetched using TMDb REST API."
              ghLink="https://github.com/ASWIN-PALAYAD/netflix---REACT"
              demoLink="https://aswin-react-netflix-clone.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="Youtube Clone"
              description="A clone of Youtube Web Application, where data is fetched using TMDb REST API."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://aswin-react-youtube-clone.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
