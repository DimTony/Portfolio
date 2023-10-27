import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anthony Dimojiaku </span>
            from <span className="purple"> Imo, Nigeria.</span>
            <br /> I am a detail-oriented BSc graduate in Mathematics and Statistics from the University of Lagos.
            <br />
            Additionally, I am currently self-employed as a software developer at Laundrop.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Praying
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "There's always a new and improved way of doing it!"{" "}
          </p>
          <footer className="blockquote-footer">Anthony</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
