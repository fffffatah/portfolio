import SetPageTitle from "../../setPageTitle";
import { Container, Nav } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Educations from "../../storage/education/data.json";
import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Education(){
    SetPageTitle("Education | A.F.M. Noorullah");
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    function handleShow() {
        setShow(true);
    }

    return(
        <div style={{'padding-top':'50px'}}>
            <Container>
                <Row xs={1} md={2}>
                    <Col>
                        <Card>
                            <Card.Header as="h5">Bachelor's</Card.Header>
                            <Card.Body>
                                <Nav.Link href="https://www.aiub.edu" target="_blank">
                                <Card.Title>{Educations.education[0].institution}</Card.Title>
                                </Nav.Link>
                                <Card.Text style={{'padding-left':'15px'}}>
                                    <div style={{'font-family':'Segoe UI'},{'color':'grey'}}>
                                        {Educations.education[0].degree} ({Educations.education[0].year})<br/>
                                        CGPA: {Educations.education[0].CGPA}<br/><br/>
                                        {Educations.education[0].achievements[0].name}
                                    </div>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="card text-right">
                                <Button variant="primary" onClick={() => handleShow()}>Details</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Courses</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Container>
                    <Row xs={1} md={2}>
                        <Col>
                            <Card>
                                <Card.Header as="h5">Bachelor's</Card.Header>
                                <Card.Body>
                                    <Nav.Link href="https://www.aiub.edu" target="_blank">
                                    <Card.Title>{Educations.education[0].institution}</Card.Title>
                                    </Nav.Link>
                                    <Card.Text style={{'padding-left':'15px'}}>
                                        <div style={{'font-family':'Segoe UI'},{'color':'grey'}}>
                                            {Educations.education[0].degree} ({Educations.education[0].year})<br/>
                                            CGPA: {Educations.education[0].CGPA}<br/><br/>
                                            {Educations.education[0].achievements[0].name}
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="card text-right">
                                    <Button variant="primary">Details</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                </Modal.Body>
            </Modal>
        </div>
    );
}