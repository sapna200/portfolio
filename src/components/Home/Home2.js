import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I'm <b className="purple">Sapna Sarkar</b> from Madhya Pradesh, India.  
              I graduated from <b>Gyan Ganga College Of Technology</b>  
              with a degree in <b>Computer Science and Engineering</b>, securing a 9 CGPA.  
              <br />
              <br />
              Currently, I'm working as a <b className="purple">Frontend Developer</b> at  
              <b> Cognizant </b>, where I specialize in developing and  
              optimizing <b className="purple">React applications</b>.  
              <br />
              <br />
              I have experience in <b className="purple">ReactJs, React-Redux, NextJs, TypeScript, Service Now and Low Code Platform</b>.  
              Apart from that, I enjoy coding in <b className="purple">JavaScript and Python</b>.  
              <br />
              <br />
              My key interests include:
              <ul>
                <li>⚡ Exploring and Learning New Technologies </li>
                <li>⚡ Building Responsive applications</li>
                <li>⚡ Scalable and Optimized Web Applications</li>
              </ul>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>Feel free to <span className="purple">connect</span> with me:</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sapna200"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/9588923430"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sapnasarkar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
