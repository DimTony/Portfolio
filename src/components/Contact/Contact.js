import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/about.png";

function Contact() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

  
    const handleSubmit = (e) => {
      e.preventDefault();
      const serverUrl = "https://mailer-hqm7.onrender.com/send-email";
      const requestOptions = {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      };
      fetch(serverUrl, requestOptions)
        .then((response) => {
            if(response.ok) {
                alert('Email sent successfully'); window.location = 'https://dimtony.github.io/';
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            } else {
                alert('Error sending email'); window.location = 'https://dimtony.github.io/';
            }

        })
        .catch((error) => {
            console.error("Network error:", error);
        })
    };
  
    return (
      <Container fluid className="contact-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Contact <strong className="purple">Me</strong>
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="10"
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="contact-img"
            >
              <img src={laptopImg} alt="contact" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
    );
}

export default Contact;