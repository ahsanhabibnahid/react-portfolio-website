import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

class AllProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center mt-5'>
                    <Row>
                        <Col lg={4} md={6} sm={12} className='p-2 mt-5'>
                            <Card className='projectCard'>
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/13/04/52/statistic-1820320_960_720.png" />
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='projectCardDescription'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='p-2 mt-5'>
                            <Card className='projectCard'>
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/13/04/52/statistic-1820320_960_720.png" />
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='projectCardDescription'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='p-2 mt-5'>
                            <Card className='projectCard'>
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/13/04/52/statistic-1820320_960_720.png" />
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='projectCardDescription'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='p-2 mt-5'>
                            <Card className='projectCard'>
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/13/04/52/statistic-1820320_960_720.png" />
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='projectCardDescription'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='p-2 mt-5'>
                            <Card className='projectCard'>
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/13/04/52/statistic-1820320_960_720.png" />
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='projectCardDescription'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='p-2 mt-5'>
                            <Card className='projectCard'>
                                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/13/04/52/statistic-1820320_960_720.png" />
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='projectCardDescription'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllProjects;