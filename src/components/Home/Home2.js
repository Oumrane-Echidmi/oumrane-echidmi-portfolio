import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home2.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  const colors = {
    background: '#003254', // Bleu nuit
    accent: '#B79447',     // Doré
    text: '#ffffff'        // Blanc
  };

  return (
    <Container fluid className="home-about-section" id="about" style={{ backgroundColor: colors.background, color: colors.text, fontFamily: "'Courier New', Courier, monospace" }}>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span style={{ color: colors.accent }}> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ fontSize: "1.2em" }}>
              I’m a Software Developer who loves transforming ideas into
              reliable, scalable products. Over time, I’ve explored several
              technologies and found my passion in building high-performance
              systems and intuitive user experiences.
              <br />
              <br />
              I’m proficient in
              <i>
                <b style={{ color: colors.accent }}>
                  {" "}
                  Java, C, Python, SQL, and JavaScript{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b style={{ color: colors.accent }}>
                  {" "}
                  Web Applications{" "}
                </b>
              </i>
              and exploring new ways to bridge on-chain and off-chain systems.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b style={{ color: colors.accent }}> Java </b> and modern frameworks like{" "}
              <i>
                <b style={{ color: colors.accent }}>React.js</b> and{" "}
                <b style={{ color: colors.accent }}>Spring Boot , Spring AI</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
