import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home.png";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  const colors = {
    background: '#003254', // Bleu nuit
    accent: '#B79447',     // Doré
    text: '#ffffff'        // Blanc
  };

  return (
    <section>
      <Container fluid className="home-section" id="home" style={{ 
        backgroundColor: colors.background, 
        color: colors.text, 
        minHeight: '100vh', 
        paddingTop: '30px',
        backgroundImage: `url(${homeLogo})`,
        backgroundSize: '50%', // Ajustez la taille selon vos besoins
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat'
      }}>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header" style={{ paddingTop: '100px' }}>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name" style={{ color: colors.accent, marginLeft: '10px' }}>ECHIDMI OUMRANE</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", color: colors.accent, fontSize: "2em", fontWeight: "bold" }}>
                <Type />
              </div>
            </Col>
            {/* Image déplacée en background */}
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Container fluid className="home-about-section" style={{ backgroundColor: colors.background, color: colors.text }}>
        <Container>
          <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social" style={{ textAlign: "center" }}>
            <h1>Find Me On</h1>
            <p>
              Feel free to <span style={{ color: colors.accent }}>connect </span>with me
            </p>
            <ul className="home-about-social-links" style={{ listStyle: "none", padding: 0, display: "flex", justifyContent: "center", gap: "20px" }}>
              <li className="social-icons">
                <a
                  href="https://github.com/Oumrane-Echidmi"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: colors.accent, fontSize: "2em" }}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: colors.accent, fontSize: "2em" }}
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/oumrane-echidmi1/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: colors.accent, fontSize: "2em" }}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/imrane_echidmi/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: colors.accent, fontSize: "2em" }}
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
