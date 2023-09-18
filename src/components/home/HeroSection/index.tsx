'use client'
import { Col, Container, Row } from "react-bootstrap";
import { GridImages } from "./GridImages";
import { PresentationText } from "./PresentationText";

export function HeroSection() {

  return (
    <Container id="heroSection" className="gap-90 g-0" as='section'>
      <Row className="justify-content-between">
        <Col md={5}>
          <PresentationText />
        </Col>
        <Col md={6}>
          <GridImages />
        </Col>
      </Row>
    </Container>
  );
}
