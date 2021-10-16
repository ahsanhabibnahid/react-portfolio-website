import React, { Component, Fragment } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap';

class ClientReview extends Component {
    render() {
        let settings = {
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            vertical: true,
            verticalSwiping: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='mainTitle'>Client Says</h1>
                    <Slider {...settings}>
                        <div>
                            <Row className='text-center justify-content-center'>
                                <Col lg={6} md={6} sm={12}>
                                    <img className='circleImg' src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" alt="" />
                                    <h3 className='serviceName'>Web Development</h3>
                                    <p className='serviceDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita dolores illum ullam ipsam iure rem veritatis possimus perspiciatis maxime voluptatibus neque mollitia unde laboriosam sapiente voluptate</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className='text-center justify-content-center'>
                                <Col lg={6} md={6} sm={12}>
                                    <img className='circleImg' src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" alt="" />
                                    <h3 className='serviceName'>Web Development</h3>
                                    <p className='serviceDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita dolores illum ullam ipsam iure rem veritatis possimus perspiciatis maxime voluptatibus neque mollitia unde laboriosam sapiente voluptate</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className='text-center justify-content-center'>
                                <Col lg={6} md={6} sm={12}>
                                    <img className='circleImg' src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" alt="" />
                                    <h3 className='serviceName'>Web Development</h3>
                                    <p className='serviceDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita dolores illum ullam ipsam iure rem veritatis possimus perspiciatis maxime voluptatibus neque mollitia unde laboriosam sapiente voluptate</p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;