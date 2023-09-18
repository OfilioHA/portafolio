"use client";
import styles from '@/assets/sass/modules/home/repository-container.module.scss';
import { Separator } from "@/components/utils/Separator";
import { useState, useCallback, useMemo, MouseEvent } from "react";
import { Button, ButtonGroup, Col, Container, Row, Pagination } from "react-bootstrap";
import { RepositoryCard } from "./RepositoryCard";

export function RepositoriesSection({ repositories }) {
  const AMOUNT_PAGE = 8;
  const [page, setPage] = useState(0);
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

  const reposPaged = useMemo(()=> {
    return reposFiletered.slice(page * AMOUNT_PAGE, (page + 1) * AMOUNT_PAGE)
  }, [reposFiletered, page]);

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
            {reposPaged.map((repository, index) => (
              <RepositoryCard {...repository} key={index} />
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
            <Pagination className="mb-0 mt-4">
              <Pagination.First onClick={()=> setPage(0) } />
              <Pagination.Prev onClick={()=> setPage((old) => old - 1) } />
              <Pagination.Next onClick={()=> setPage((old) => old + 1) } />
              <Pagination.Last />
            </Pagination>
        </Col>
      </Row>
    </Container>
  );
}
