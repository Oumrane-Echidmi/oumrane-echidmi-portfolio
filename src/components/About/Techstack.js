import React from "react";
import { Col, Row } from "react-bootstrap";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

import { 
  SiBootstrap, 
  SiMysql, 
  SiSpringboot, 
  SiSpring, 
  SiC, 
  SiFlask 
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { FaChartBar } from "react-icons/fa"; // Using generic chart icon for Power BI
import { RiCodeSSlashLine } from "react-icons/ri"; // Using generic code icon for Pascal if no specific icon found

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Existing Techs Kept */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C++" style={{ width: '100%', maxWidth: '80px' }} />
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC fontSize={"80px"} />
        <div className="tech-icons-text">C</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="java" style={{ width: '100%', maxWidth: '80px' }} />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" style={{ width: '100%', maxWidth: '80px' }} />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" style={{ width: '100%', maxWidth: '80px' }} />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      
      {/* New Additions */}
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap fontSize={"80px"} />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" style={{ width: '100%', maxWidth: '80px' }} />
        <div className="tech-icons-text">React.Js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot fontSize={"80px"} />
        <div className="tech-icons-text">Spring Boot</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring fontSize={"80px"} />
        <div className="tech-icons-text">Spring AI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask fontSize={"80px"} />
        <div className="tech-icons-text">Flask</div>
      </Col>

      {/* Database/Backend */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongoDb" style={{ width: '100%', maxWidth: '80px' }} />
        <div className="tech-icons-text">Mongo DB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql fontSize={"80px"} />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMsqlServer fontSize={"80px"} />
        <div className="tech-icons-text">SQL Server</div>
      </Col>
      
      {/* Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" style={{ width: '100%', maxWidth: '80px' }} />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" style={{ width: '100%', maxWidth: '80px' }} />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaChartBar fontSize={"80px"} />
        <div className="tech-icons-text">Power BI</div>
      </Col>

      {/* Pascal */}
      <Col xs={4} md={2} className="tech-icons">
        <RiCodeSSlashLine fontSize={"80px"} />
        <div className="tech-icons-text">Pascal</div>
      </Col>

    </Row>
  );
}

export default Techstack;
