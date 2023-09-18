"use client";
import styles from '@/assets/sass/modules/home/repository-container.module.scss';
import { Separator } from "@/components/utils/Separator";
import { useState, useCallback, useMemo, MouseEvent } from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { RepositoryCard } from "./RepositoryCard";

export function RepositoriesSection({ repositories }) {
  const [repos, setRepos] = useState(repositories);
  const [filter, setFilter] = useState("all");

  const handleClickButtonFilter = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const {
        target: { value },
      } = event;
      setFilter(value);
    },
    []
  );

  const reposFiletered = useMemo(() => {
    return repos.filter((repo) => {
      if (filter === "all") return true;
      return repo.visibilityType === filter;
    });
  }, [filter]);

  return (
    <Container as="section" className="gap-90 g-0">
      <Row className="mb-5">
        <Col md={6}>
          <h2 className="mb-4">Conoce más sobre mi atraves de mis {repos.length} proyectos</h2>
          <Separator />
        </Col>
        <Col md={6}>
          <div className="d-flex h-100 justify-content-end align-items-end">
            <div className="d-flex mb-3">
              <ButtonGroup>
                <Button onClick={handleClickButtonFilter} value="all">
                  Todos
                </Button>
                <Button onClick={handleClickButtonFilter} value="public">
                  Publicos
                </Button>
                <Button onClick={handleClickButtonFilter} value="private">
                  Privados
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <div className={`d-grid ${styles.repositoryContainer}`}>
            {reposFiletered.map((repository, index) => (
              <RepositoryCard {...repository} key={index} />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
