import React, { useState } from "react";

import laptopImg from "../../Assets/about.png";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const redirectToPage = (pageUrl) => {
    window.location.href = pageUrl;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length === 0) {
      const serverUrl = "https://mailer-hqm7.onrender.com/send-email";

      const formDataToSend = new URLSearchParams(formData);

      fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataToSend.toString(),
      })
      .then((response) => {
        if (response.ok) {
          setAlertMessage("Email sent successfully"); 
          

          setFormSubmitted(true)
        } else {
          setAlertMessage("Error sending email");
        }
      })
      .catch((error) => {
        console.log("Server error:", error);
        setAlertMessage("Error submitting the form");
      });
    } else {
      // Validation errors found
      setErrors(newErrors);
    }
  };

  return (
    <Container fluid className="contact-section">
      <Container>
        
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Contact <strong className="purple">Me</strong>
            </h1>
            {alertMessage ? (
              <Row style={{ justifyContent: "center"}} className={formSubmitted ? "alert alert-success" : "alert alert-danger"}>
                {alertMessage}
                {formSubmitted && (
                  <Button
                  onClick={() => redirectToPage("https://tonydim.vercel.app/contact")}
                  variant="primary"
                  >
                    OK
                  </Button>
                )}
              </Row>
            ) : (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows="4"
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </Form>
            )}
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
