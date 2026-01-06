import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import Github from "./Github";
// import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Github from "./Github";

function About() {
  const colors = {
    background: '#003254', // Bleu nuit
    accent: '#B79447',     // Doré
    text: '#ffffff'        // Blanc
  };

  return (
    <Container fluid className="about-section" style={{ backgroundColor: colors.background, color: colors.text, minHeight: "100vh", paddingTop: "120px" }}>
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong style={{ color: colors.accent }}>I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong style={{ color: colors.accent }}>Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong style={{ color: colors.accent }}>Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
