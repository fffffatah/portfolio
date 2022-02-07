import SetPageTitle from "../../setPageTitle";
import { Card, Nav, Container, Row, Col } from "react-bootstrap";
import Exps from "../../storage/experience/data.json";

export default function Experience(){
    SetPageTitle("Experience | A.F.M. Noorullah");
    return(
        <>
            <div style={{'padding-top':'50px'}}>
                <Container>
                    <Row xs={1} md={2}>
                        <Col>
                            <Card>
                                <Card.Header as="h5">{Exps.experience[0].designation}</Card.Header>
                                    <Card.Body>
                                        <Nav.Link href="https://brainstation-23.com/?bs" target="_blank">
                                            <Card.Title>{Exps.experience[0].organization}</Card.Title>
                                        </Nav.Link>
                                            <Card.Text style={{'padding-left':'15px'}}>
                                                <div style={{'font-family':'Segoe UI'},{'color':'grey'}}>
                                                    {Exps.experience[0].duration}
                                                </div>
                                            </Card.Text>
                                    </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}