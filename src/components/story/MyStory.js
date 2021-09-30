import SetPageTitle from "../../setPageTitle";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Stories from "../../storage/mystory/data.json";
import IntroImage from "../../storage/mystory/Intro.png";
import InterestImage from "../../storage/mystory/Interests.png";
import BeginingImage from "../../storage/mystory/Begining.png";

export default function MyStory(){
    SetPageTitle("My Story | A.F.M. Noorullah");
    return(
        <div>
            <Container>
                <Row xs={1} md={2}>
                    <Col><Image src={IntroImage} height="500px" width="600px" fluid/></Col>
                    <Col>
                        <div style={{'font-family':'Segoe UI'},{'color':'#3B8CF5'}}>
                            <h1 style={{'padding-top':'50px'}}><b>{Stories.stories[0].title}</b></h1>
                        </div>
                        <div style={{'font-family':'Segoe UI'},{'color':'grey'}}>
                            <p style={{'padding-top':'5px'}}><b>{Stories.stories[0].story}</b></p>
                        </div>
                    </Col>
                    <Col><Image src={BeginingImage} height="500px" width="600px" fluid/></Col>
                    <Col>
                        <div style={{'font-family':'Segoe UI'},{'color':'#3B8CF5'}}>
                            <h1 style={{'padding-top':'50px'}}><b>{Stories.stories[1].title}</b></h1>
                        </div>
                        <div style={{'font-family':'Segoe UI'},{'color':'grey'}}>
                            <p style={{'padding-top':'5px'}}><b>{Stories.stories[1].story}</b></p>
                        </div>
                    </Col>
                    <Col><Image src={InterestImage} height="500px" width="600px" fluid/></Col>
                    <Col>
                        <div style={{'font-family':'Segoe UI'},{'color':'#3B8CF5'}}>
                            <h1 style={{'padding-top':'50px'}}><b>{Stories.stories[2].title}</b></h1>
                        </div>
                        <div style={{'font-family':'Segoe UI'},{'color':'grey'}}>
                            <p style={{'padding-top':'5px'}}><b>{Stories.stories[2].story}</b></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}