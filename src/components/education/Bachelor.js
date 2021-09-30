import SetPageTitle from "../../setPageTitle";
import { Container, Nav } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Educations from "../../storage/education/data.json";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Grade from "../../storage/downloads/GRADE.pdf";

export default function Bachelor(){
    //MAIN MODAL
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    function handleShow() {
        setShow(true);
    }

    return(
        <div>
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
                                <Card.Header as="h5">{Educations.education[0].semesters[0].session}</Card.Header>
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
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header as="h5">{Educations.education[0].semesters[1].session}</Card.Header>
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
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header as="h5">{Educations.education[0].semesters[2].session}</Card.Header>
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
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header as="h5">{Educations.education[0].semesters[3].session}</Card.Header>
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
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header as="h5">{Educations.education[0].semesters[4].session}</Card.Header>
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
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header as="h5">{Educations.education[0].semesters[5].session}</Card.Header>
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
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header as="h5">{Educations.education[0].semesters[6].session}</Card.Header>
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
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header as="h5">{Educations.education[0].semesters[7].session}</Card.Header>
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
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header as="h5">{Educations.education[0].semesters[8].session}</Card.Header>
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
                            </Card>
                        </Col>
                    </Row>
                </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Nav.Link href={Grade} download>
                        Download Grade Report
                    </Nav.Link>
                </Modal.Footer>
            </Modal>
        </div>
    );
}