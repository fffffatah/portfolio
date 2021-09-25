import { Navbar, NavItem } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import MyStory from "../story/MyStory";
import Education from "../education/Education";

export default function TopNav(){
    return(
        <BrowserRouter>
        <div>
            <Navbar collapseOnSelect="true" expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav variant="tabs" defaultActiveKey="/education" className="me-auto">
                            <NavItem>
                                <Nav.Link eventKey="link-1" as={Link} to="/">MyStory</Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey="link-2" as={Link} to="/education">Education</Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey="link-3" href="/">Skills</Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey="link-4" href="/">Projects</Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey="link-5" href="/">Experience</Nav.Link>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <NavItem>
                            <NavDropdown title="Downloads" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Resume</NavDropdown.Item>
                            </NavDropdown>
                        </NavItem>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={MyStory}
                />
                <Route
                    exact
                    path="/education"
                    component={Education}
                />
            </Switch>
        </div>
        </BrowserRouter>
    );
}