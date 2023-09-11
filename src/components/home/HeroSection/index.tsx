"use client";
import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export function HeroSection() {
  useEffect(() => {

  }, []);

  return (
    <Container>
      <Row className="justify-content-between">
        <Col md={5}>
          <h1>Hello World</h1>
          <hr />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, suscipit libero officiis similique autem ad incidunt provident quae aperiam! Provident.</p>
        </Col>
        <Col md={6}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            height: '100%',
            gap: '1.25rem'
          }}>
            <Card style={{ gridRowStart: 1, gridRowEnd: 3 }}>
              <Card.Body />
            </Card>
            <Card>
              <Card.Body />
            </Card>
            <Card>
              <Card.Body />
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
