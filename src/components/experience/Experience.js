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
                        {
                            Exps.experience.length?(
                                Exps.experience.map((experience)=>{
                                    return(
                                        <Col>
                                            <Card>
                                                <Card.Header as="h5">{experience.designation}</Card.Header>
                                                <Card.Body>
                                                    <Nav.Link href="https://brainstation-23.com/?bs" target="_blank">
                                                <Card.Title>{experience.organization}</Card.Title>
                                                </Nav.Link>
                                                <Card.Text style={{'padding-left':'15px'}}>
                                                    <div style={{'font-family':'Segoe UI'},{'color':'grey'}}>
                                                        {experience.duration}
                                                    </div>
                                                </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })
                            ):''
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
}