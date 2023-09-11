'use client';

import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

export function RepositoriesSection({ repositories }) {

    const [repos, setRepos] = useState(repositories);

    useEffect(() => {
        console.log(repos);
    }, []);

    return (<Container>
        <Row>
            {repos.map(({ name }, index) => (<h1 key={index}>
                {name}</h1>
            ))}
        </Row>
    </Container>);
}