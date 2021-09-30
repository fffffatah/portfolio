import SetPageTitle from "../../setPageTitle";
import { Container, Nav } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Educations from "../../storage/education/data.json";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Bachelor from "./Bachelor";

export default function Education(){
    SetPageTitle("Education | A.F.M. Noorullah");

    return(
        <div style={{'padding-top':'50px'}}>
            <Bachelor/>
        </div>
    );
}