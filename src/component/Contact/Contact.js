import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import emailjs from 'emailjs-com';
import './Contact.css';

export default function Contact() {
    function sendEmail(data) {
        data.preventDefault();

        emailjs.sendForm('service_se9uhee', 'template_sifpyzf', data.target, 'user_q9s8WoUbIcBUAnIRXCxDj')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="backContact">
            <Container>
                <Row>
                    <Col className="titleContact">
                        <h2 className="titleContactText">Contact</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form className="contact" onSubmit={sendEmail} inverted size={'huge'}>
                            <Form.Group widths='equal'>
                                <Form.Field
                                    id='form-input-control-first-name'
                                    control={Input}
                                    label='Name'
                                    placeholder='Your Name'
                                    name="user_name"
                                />
                                <Form.Field
                                    id='form-input-control-last-name'
                                    control={Input}
                                    label='E-Mail'
                                    placeholder='Your E-Mail'
                                    name="user_email"
                                />
                            </Form.Group>
                            <Form.Field
                                id='form-textarea-control-opinion'
                                control={TextArea}
                                label='Message'
                                placeholder='Your Message'
                                name="message"
                            />
                            <div className="buttonConfirm">
                                <Form.Field
                                    id='form-button-control-public'
                                    control={Button}
                                    content='Confirm'
                                />
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}