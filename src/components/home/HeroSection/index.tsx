"use client";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

export function HeroSection() {
  useEffect(() => {
    fetch("https://api.github.com/users/OfilioHA/repos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Hello World</h1>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
