import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colors = {
    accent: '#B79447',     // Doré
    text: '#ffffff'        // Blanc
  };

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: colors.text,
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong style={{ color: colors.accent }}>Code</strong>
      </h1>
      <GitHubCalendar
        username="Oumrane-Echidmi"
        blockSize={12}
        blockMargin={5}
        color={colors.accent}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
