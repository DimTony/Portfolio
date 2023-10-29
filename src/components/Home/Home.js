import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import pdf from "../../Assets/AnthonyDimojiakuCV2023.pdf";
import { AiOutlineDownload } from "react-icons/ai";



function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header" >
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ANTHONY DIMOJIAKU</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              
            </Col>
          </Row>
        </Container>
      </Container>
      <Button
        variant="primary"
        href={pdf}
        target="_blank"
        style={{  maxWidth: "250px", fontSize: "1.2rem", padding: "15px 30px" }}
      >
        <AiOutlineDownload />
        &nbsp;Download CV
      </Button>
      <Home2 /> 
    </section>
  );
}

export default Home;
