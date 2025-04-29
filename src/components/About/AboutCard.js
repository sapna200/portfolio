import React from "react";
import Card from "react-bootstrap/Card";
import { BsCameraFill } from "react-icons/bs";
import { FaTree } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sapna Sarkar</span> from 
            <span className="purple"> MP, India.</span>
            <br />
            I graduated with a <b>B.Tech in Computer Science</b> from 
            <span className="purple"> Gyan Ganga College Of Technology</span>.
            <br />
            <br />
            Currently, I work as a <b className="purple">Frontend Developer</b> at  
            <b> Cognizant</b>. My expertise lies in:
          </p>
          <ul><li>Reusable components & efficient state handling with Redux/Context.</li>
            <li>Enhancing API integration with React performance optimizations</li>
            <li>Building scalable React apps with a focus on user experience</li>
            <li>Mastering swift adoption of technologies for seamless solutions</li>
           
          </ul>
          <p>
            Apart from coding, some other activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <FaTree/> Gardening
            </li>
            <li className="about-activity">
              🎨 UI/UX Design
            </li>
            <li className="about-activity">
              📖 Exploring AI & Cloud Technologies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
