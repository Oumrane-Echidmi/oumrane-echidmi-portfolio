import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  const colors = {
    background: '#003254', // Bleu nuit
    accent: '#B79447',     // Doré
    text: '#ffffff'        // Blanc
  };

  return (
    <Container fluid style={{ backgroundColor: 'black', padding: '20px 0', color: colors.text, fontFamily: "'Courier New', Courier, monospace" }}>
      <Row>
        <Col md="4" className="footer-copywright" style={{ textAlign: "center" }}>
          <h4 style={{ fontSize: "1em", margin: 0 }}>Designed and Developed by ECHIDMI OUMRANE</h4>
        </Col>
        <Col md="4" className="footer-copywright" style={{ textAlign: "center" }}>
          <h4 style={{ fontSize: "1em", margin: 0 }}>Copyright © {year} EO</h4>
        </Col>
        <Col md="4" className="footer-body" style={{ textAlign: "center" }}>
          <ul className="footer-icons" style={{ listStyle: "none", padding: 0, display: "flex", justifyContent: "center", gap: "20px" }}>
            <li className="social-icons">
              <a
                href="https://github.com/Oumrane-Echidmi"
                style={{ color: colors.text, fontSize: "1.2em" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="#"
                style={{ color: colors.text, fontSize: "1.2em" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li> 
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/oumrane-echidmi1/"
                style={{ color: colors.text, fontSize: "1.2em" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/imrane_echidmi/"
                style={{ color: colors.text, fontSize: "1.2em" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
