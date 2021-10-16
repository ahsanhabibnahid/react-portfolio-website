import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player/lazy'


class Video extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    modalClose = () => {
        this.setState({ show: false })
    }

    modalOpen = () => {
        this.setState({ show: true })
    }

    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <Row>
                        <Col className='videoCard' lg={12} md={12} sm={12}>
                            <div>
                                <h4 className='videoTitle'>How I Do</h4>
                                <p className='videoDescription'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, nobis exercitationem? Nisi aperiam debitis, et perferendis beatae facilis aliquam eligendi maiores itaque ab maxime veniam obcaecati magnam rem adipisci aliquid.
                                </p>
                                <p onClick={this.modalOpen}><FontAwesomeIcon className='iconBullet playButton' icon={faPlayCircle} /></p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Modal size='lg' show={this.state.show} onHide={this.modalClose}>
                    <Modal.Body>
                        <ReactPlayer width='100%' controls={true} url='https://www.youtube.com/watch?v=Zv11L-ZfrSg' />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Video;