import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'

class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='summaryBanner p-0 summarySection'>
                    <div className='summaryBannerOverlay text-center'>
                        <Container>
                            <Row>
                                <Col lg={8} md={6} sm={12}>
                                    <Row className='countSection'>
                                        <Col>
                                            <h1 className='countNumber'>
                                                <CountUp start={0} end={100} duration={2.75}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>

                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className='countTitle'>Total Projects</h4>
                                            <hr className="bg-white w-25" />
                                        </Col>
                                        <Col>
                                            <h1 className='countNumber'>
                                                <CountUp start={0} end={100} duration={1}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>

                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className='countTitle'>Total Projects</h4>
                                            <hr className="bg-white w-25" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <Card className='workCard'>
                                        <Card.Body>
                                            <Card.Title className='cardTitle'>How I Work</Card.Title>
                                            <Card.Text>
                                                <p className='cardSubTitle text-justify'><FontAwesomeIcon className='iconBullet' icon={faCheckCircle} /> Requirement Gathering</p>
                                                <p className='cardSubTitle text-justify'><FontAwesomeIcon className='iconBullet' icon={faCheckCircle} /> System Analysis</p>
                                                <p className='cardSubTitle text-justify'><FontAwesomeIcon className='iconBullet' icon={faCheckCircle} /> Coding Testing</p>
                                                <p className='cardSubTitle text-justify'><FontAwesomeIcon className='iconBullet' icon={faCheckCircle} /> Implementation</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;