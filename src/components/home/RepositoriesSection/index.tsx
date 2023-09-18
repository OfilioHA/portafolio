"use client";
import { Separator } from "@/components/utils/Separator";
import { useState } from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { RepositoryCard } from "./RepositoryCard";

export function RepositoriesSection({ repositories }) {
  const [repos, setRepos] = useState(repositories);
  const [filter, setFilter] = useState("all");

  return (
    <Container as="section" className="gap-90">
      <Row className="mb-5">
        <Col md={6}>
          <h2 className="mb-4">Conoce más sobre mi atraves de mis proyectos</h2>
          <Separator />
        </Col>
        <Col md={6}>
          <div className="d-flex h-100 justify-content-end align-items-end">
            <div className="d-flex mb-3">
              <ButtonGroup>
                <Button>Todos</Button>
                <Button>Publicos</Button>
                <Button>Privados</Button>
              </ButtonGroup>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        {repos.map((repository, index) => (
          <Col md={3} key={index}>
            <RepositoryCard {...repository} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
