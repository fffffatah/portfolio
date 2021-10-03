import { ButtonGroup, Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Github from "../../assets/Github.png";
import Linkedin from "../../assets/Linkedin.png";
import Email from "../../assets/Email.png"
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { NavItem } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function BottomNav(){
    return(
        <footer style={{"position":"relative"},{"padding-top":"25px"}}>
            <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Row xs={1} md={1}>
                    <Col>
                        <Nav.Link href="https://github.com/fffffatah" target="_blank"><Image src={Github} height="25px" width="25px" fluid/> Github</Nav.Link>
                        <Nav.Link href="https://linkedin.com/in/afmnoorullah" target="_blank"><Image src={Linkedin} height="25px" width="25px" fluid/> Linkedin</Nav.Link>   
                    </Col>
                </Row>
                <div className="justify-content-end">
                    <NavItem>
                        <Nav.Link href="mailto: ab.fatahmn@hotmail.com"><Image src={Email} height="25px" width="25px" fluid/> ab.fatahmn@hotmail.com</Nav.Link>
                    </NavItem>
                    <NavItem style={{"padding-left":"60px"}}>
                        <Button>Contact Directly</Button>
                    </NavItem>
                </div>
            </Container>
            </Navbar>
        </footer>
    );
}