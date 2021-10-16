import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class AboutDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h1 className='serviceName'>Who I AM</h1>
                            <hr />
                            <p className='serviceDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste suscipit, voluptas natus reiciendis ab aliquam tempore eveniet assumenda debitis velit aperiam? Eum eos eligendi perspiciatis quam dolor quae deleniti? Delectus blanditiis iste ad ut doloribus doloremque vero! Hic reprehenderit, rerum quisquam itaque aspernatur quidem qui ut cum facilis laborum fuga.</p>
                            
                            <h1 className='serviceName'>My Mission</h1>
                            <hr />
                            <p className='serviceDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste suscipit, voluptas natus reiciendis ab aliquam tempore eveniet assumenda debitis velit aperiam? Eum eos eligendi perspiciatis quam dolor quae deleniti? Delectus blanditiis iste ad ut doloribus doloremque vero! Hic reprehenderit, rerum quisquam itaque aspernatur quidem qui ut cum facilis laborum fuga.</p>
                           
                            <h1 className='serviceName'>My Vision</h1>
                            <hr />
                            <p className='serviceDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste suscipit, voluptas natus reiciendis ab aliquam tempore eveniet assumenda debitis velit aperiam? Eum eos eligendi perspiciatis quam dolor quae deleniti? Delectus blanditiis iste ad ut doloribus doloremque vero! Hic reprehenderit, rerum quisquam itaque aspernatur quidem qui ut cum facilis laborum fuga.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutDescription;