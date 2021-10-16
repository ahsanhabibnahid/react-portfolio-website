import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class Analysis extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    Technology: 'JavaScript', Projects: '100'
                },
                {
                    Technology: 'React', Projects: '90'
                },
                {
                    Technology: 'Laravel', Projects: '70'
                },
                {
                    Technology: 'PHP', Projects: '100'
                },
                {
                    Technology: 'Java', Projects: '60'
                },
                {
                    Technology: 'Node JS', Projects: '50'
                },
                {
                    Technology: 'Angular', Projects: '75'
                },
                {
                    Technology: 'Vue', Projects: '90'
                },
            ]
        }
    }

    render() {
        const blueColor = 'rgba(0, 115, 230, 0.8)'
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='mainTitle'>Technology Used</h1>
                    <Row>
                        <Col style={{ height: '300px', width: '100%' }} lg={6} md={12} sm={12}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey='Technology'></XAxis>
                                    <Tooltip></Tooltip>
                                    <Bar dataKey="Projects" fill={blueColor} />
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className='text-justify description'>Lorem ipsum dolor sit amet, an tation assentior ius, eu choro tempor graeci ius. Nam in impedit splendide incorrupte, ei copiosae adolescens complectitur est, ex nulla corrumpit pro. Has ut liber clita docendi, et debitis urbanitas pro. Tale feugait reformidans sed ei. Vix eius abhorreant et.

                                Vim cu feugait oportere repudiandae, pro in ceteros luptatum. Veri facilis scaevola cu nec, vide imperdiet ei mel, vel facer corrumpit te. Malis suavitate an cum. Labitur antiopam iracundia sit ei, eu usu atqui iudicabit consequat. Mel quodsi repudiare at. Vel percipit similique ad. Sed stet aperiam vulputate ei, ut quo omnes nostro expetendis.

                                Laoreet similique vituperatoribus eum ei. Cu ius scripta laoreet posidonium. Te pro dicta dolore recusabo, eam no novum ornatus. Mea ei saperet voluptatum, nostrud vocibus ut sed. Mea aliquip alterum ea.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;