import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";

import TitleBar from "../components/TitleBar";
import ProfessionalHeadshot from "../assets/jpg/my-image-circular.jpg";
import FallbackProfessionalHeadshot from "../assets/jpg/my-image-circular.jpg";

class About extends React.Component {
  render() {
    return (
      <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
        <div className="inner-structure center" style={{ flexDirection: "column" }}>
          <TitleBar title="About Me" />
          <Container fluid style={{ padding: "1.5em" }}>
            <Row className="justify-content-center" style={{ alignItems: "center" }}>
              <Col style={{ textAlign: "center" }}>
                <picture>
                  <source cclassName="header-img" type="image/webp" srcset={ProfessionalHeadshot} />
                  <img className="header-img" src={FallbackProfessionalHeadshot} alt="header" fluid />
                </picture>
              </Col>
            </Row>
            <Row className="justify-content-center" style={{ alignItems: "center" }}>
              <Col lg="10">
                <p
                  id="about"
                  className="secondary-text"
                  style={{
                    padding: "25px 10px",
                    textAlign: "justify",
                    color: "#111111",
                    margin: "0w",
                  }}
                >
                 A passionate problem solver and developer. Graduate from BMS colege of Engineering Bangalore with major in Electrical and Electronics Engineering.
I am interested in exploring the fields of Software Engineering, Full-Stack web Development,Computer networks and I am open to opportunities for the same. I'm actively searching
                  for Software Engineering and/or Web Development internships for Summer 2021!
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Button className="resume-btn" href="/resume.pdf" target="_blank" size="lg">
                <FontAwesomeIcon icon={faFileAlt} /> Résumé
              </Button>
              <Button
                className="resume-btn"
                href="https://www.adityavsingh.com/old-personal-website"
                target="_blank"
                size="lg"
              >
                <FontAwesomeIcon icon={faGlobe} /> Old Website
              </Button>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;
