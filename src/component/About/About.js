import React from 'react';
import './About.css';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Embed } from 'semantic-ui-react'

export default function About() {
    return (
        <div className="backAbout">
            <Container>
                <Row className="row">
                    <Col style={{ marginTop: '15%' }}>
                        <h1 className="titleAbout">La vidéo qui me représente :</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Embed
                            style={{ border: '10px solid #232121' }}
                            hd={true}
                            id='H2k2UqPJ_CM'
                            placeholder='/testTHRIVE/images/maps.jpg'
                            source='youtube'
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}