import React, { Component } from "react";
import { Container, Row, Col } from "shards-react";
import LoginCard from "../components/LoginCard"

export class ViewTestWithCard extends Component {
    render() {
        return (
            <Container className="card-test">
                <Row>
                    <Col sm={{ size: 4, order: 2, offset: 4}}>
                        <LoginCard/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
        );
    }
}