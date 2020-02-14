import React from 'react';

import { Container, Row, Col } from 'reactstrap'

import './StoreStandards.scss';
import data from './data.json';
import FooterImage from '../../images/smartmockups_k6jncj11.png'

const StoreStandards = (props) => {

    const standards = (data.standards);
    console.log (standards);

    return(
        <div className="store-standards">
            <Container className="store-standards-inner">
                 <div className="standards-list">
                    <Col-6>
                        <h2>Store Standards & Requirements</h2>
                        <p>Each store has the following standard features and requirements that are included:</p>

                        <Row>
                            <Col>
                                <ul>
                                    {standards.slice(0,4).map(standard => (
                                        <li key="id">{standard.description}</li>
                                    ))}
                                </ul>
                                
                            </Col>

                            <Col>
                                <ul>
                                    {standards.slice(4,6).map(standard => (
                                        <li key="id">{standard.description}</li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                    </Col-6>

                    <Col-6 className="image">
                        <img className="mockup-image" src={FooterImage} alt="Screenshots of stores" />
                    </Col-6>
                </div>

                
            </Container>
        </div>
    )
}

export default StoreStandards;