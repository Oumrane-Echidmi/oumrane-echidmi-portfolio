import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import logo from "../../Assets/Logo.png";
import flask from "../../Assets/flask.png";
import learnhub from "../../Assets/learnhub.png";
import "./projects.css";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath={learnhub}
              isBlog={false}
              title="LearnHub Platform"
              description="LearnHub is a modern, responsive web application built with React and Bootstrap 5 for online education. Users can browse courses, view detailed curriculum, check pricing plans, and contact support. Built with React.js, Bootstrap 5, and React Router DOM. Features include dynamic course pages, responsive design, interactive UI with hover effects, and centralized data management."
              ghLink="https://github.com/Oumrane-Echidmi/learnhub-platform.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flask}
              isBlog={false}
              title="Flask File Share"
              description="A modern, fast, and secure local file sharing application built with Flask. Designed to transfer files and folders effortlessly between devices on a local network. Features include Drag & Drop uploads, file library for easy downloads, auto-cleanup of uploads, and a modern Glassmorphism UI. Built with Flask (backend) and Vanilla JS/CSS (frontend)."
              ghLink="https://github.com/Oumrane-Echidmi/flask-file-share.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
