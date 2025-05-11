import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
} from "react-icons/di";
import { FaAws, FaSass } from "react-icons/fa";
import {
  SiGithub,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiZoho,
} from "react-icons/si";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
     
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
      <SiBootstrap/>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSass />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiZoho />
      </Col>
    </Row>
  );
}

export default Techstack;