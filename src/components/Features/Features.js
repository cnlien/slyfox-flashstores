import React from 'react';

import { Container, Col, Row } from 'reactstrap'

import './Features.scss';

import CustomStoresReimagined from '../../images/l4252-DesktopMock.png';
import CuratedCatalog from '../../images/smartmockups_k6i84m4b.png';
import RevenueSharing from '../../images/smartmockups_k6icpju8.png';


const Features =()=> {
    
    return(
        <Container className="features">
            <Row className="features-row">
                <Col className="features-col">
                    <h2>Custom Stores reimagined</h2>
                    <p>The all new Slyfox Flashstore program is designed to provide our customers an opportunity to outfit their teams, workforce and fans with custom clothing and promotional items without having to make a minimum order.</p>
                    <img src={CustomStoresReimagined} alt="hi" />
                </Col>

                <Col className="center-col features-col">
                    <h2>A Curated Catalog</h2>
                    <p>We’ve already done the hard work of browsing through the thousands of products and apparel and have selected a hand-picked, curated catalog of the most popular and best priced items for you to choose from.</p>
                    <img src={CuratedCatalog} alt="hi" />

                </Col>

                <Col className="features-col">
                    <h2>Revenue Sharing</h2>
                    <p>We’ve already done the hard work of browsing through the thousands of products and apparel and have selected a hand-picked, curated catalog of the most popular and best priced items for you to choose from.</p>
                    <img src={RevenueSharing} alt="hi" />

                </Col>
            </Row>
        </Container>
    )
}

export default Features;