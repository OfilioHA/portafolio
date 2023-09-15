'use client';
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export function Header() {

    const pathName = usePathname();

    return (
        <header>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} href="/">Navbar</Navbar.Brand>
                    <Nav className="ms-auto" defaultActiveKey={pathName}>
                        <Nav.Link as={Link} href="/">Home</Nav.Link>
                        <Nav.Link as={Link} href="#features">Features</Nav.Link>
                        <Nav.Link as={Link} href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}