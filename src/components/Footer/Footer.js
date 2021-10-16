import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';



class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='footerSection text-center'>
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h3 className='serviceName'>Follow Me</h3>
                            <a className='socialLink' href="#"><FontAwesomeIcon  icon={faFacebook} /> Facebook</a> 
                            <br />
                            <a className='socialLink' href="#"><FontAwesomeIcon  icon={faYoutube} /> Youtube</a>

                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h3 className='serviceName'>Address</h3>
                            <p className='serviceDescription'>50/b Test Area, Dhaka Bangladesh</p>
                            <p className='serviceDescription'><FontAwesomeIcon  icon={faEnvelope} /> admin@gmail.com</p>
                            <p className='serviceDescription'><FontAwesomeIcon  icon={faPhone} /> +8800111111188</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h3 className='serviceName'>Information</h3>
                            <a className='footerLink' href="#">About Me</a>
                            <br />
                            <a className='footerLink' href="#">My Resume</a>
                            <br />
                            <a className='footerLink' href="#">Contact Me</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h3 className='serviceName'>Legal</h3>
                            <a className='footerLink' href="#">Refund Policy</a>
                            <br />
                            <a className='footerLink' href="#">Terms and Condition</a>
                            <br />
                            <a className='footerLink' href="#">Privacy and Policy</a>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className='text-center copyRight'>
                    <a className='copyRightLink' href="#">Design and Developed by Nahid</a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;