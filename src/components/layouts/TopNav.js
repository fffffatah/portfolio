import { Navbar, NavItem } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import MyStory from "../story/MyStory";
import Education from "../education/Education";
import Skills from "../skills/Skills";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import ProfileImage from "../../assets/ProfileImage.png"
import { Image } from "react-bootstrap";
import Research from "../research/Research";
import BottomNav from "./BottomNav";

export default function TopNav(){
    return(
        <BrowserRouter>
        <div style={{"min-height": "calc(100vh - 125px)"}}>
            <Navbar collapseOnSelect="true" expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/"><Image src={ProfileImage} height="120px" width="120px"/></Navbar.Brand>
                    <Navbar.Text><div style={{'font-family':'Segoe UI'},{'padding-right':'30px'}}><div style={{'font-size':'25px'}}><b>A.F.M. NOORULLAH</b></div></div></Navbar.Text>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav variant="tabs" defaultActiveKey="/" className="me-auto">
                            <NavItem>
                                <Nav.Link eventKey="link-1" as={Link} to="/">About</Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey="link-6" as={Link} to="/experience">Experience</Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey="link-4" as={Link} to="/education">Education</Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey="link-3" as={Link} to="/skills">Skills</Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link eventKey="link-2" as={Link} to="/projects">Projects</Nav.Link>
                            </NavItem>
                            {/* <NavItem>
                                <Nav.Link eventKey="link-5" as={Link} to="/research">Research</Nav.Link>
                            </NavItem> */}
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <NavItem>
                            <NavDropdown title="Downloads" id="basic-nav-dropdown">
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
                <Route
                    exact
                    path="/experience"
                    component={Experience}
                />
                <Route
                    exact
                    path="/projects"
                    component={Projects}
                />
                <Route
                    exact
                    path="/skills"
                    component={Skills}
                />
                <Route
                    exact
                    path="/research"
                    component={Research}
                />
            </Switch>
        </div>
        <BottomNav/>
        </BrowserRouter>
    );
}