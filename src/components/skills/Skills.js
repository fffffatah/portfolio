import SetPageTitle from "../../setPageTitle";
import { Card, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function Skills(){
    SetPageTitle("Skills | A.F.M. Noorullah");
    return(
        <div style={{'padding-top':'50px'}}>
            <Container>
                <Row xs={1} md={3}>
                    <Col>
                        <Card>
                            <Card.Header as="h5">Bachelor's</Card.Header>
                                <Card.Body>
                                    <Card.Title>Hello</Card.Title>
                                    <Card.Text>Hello World</Card.Text>
                                </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}