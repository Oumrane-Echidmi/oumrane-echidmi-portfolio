import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const colors = {
    background: '#003254', // Bleu nuit
    accent: '#B79447',     // Doré
    text: '#ffffff'        // Blanc
  };

  return (
    <Card className="quote-card-view" style={{ backgroundColor: "transparent", border: "none", color: colors.text, fontFamily: "'Courier New', Courier, monospace" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize: "1.2em" }}>
            Hi everyone, I am <span style={{ color: colors.accent }}>ECHIDMI OUMRANE</span>.
            <br />
            I am a <span style={{ color: colors.accent }}>Software Developer</span>.
            <br />
            I love building high-performance systems and intuitive user experiences.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul style={{ listStyleType: "none", paddingLeft: "0", fontSize: "1.2em" }}>
            <li className="about-activity">
              <ImPointRight style={{ color: colors.accent }} /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight style={{ color: colors.accent }} /> Coding ✍️
            </li>
            <li className="about-activity">
              <ImPointRight style={{ color: colors.accent }} /> Traveling 🌍
            </li>
          </ul>

          <p style={{ color: colors.accent }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer" style={{ color: colors.text }}>ECHIDMI OUMRANE</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
