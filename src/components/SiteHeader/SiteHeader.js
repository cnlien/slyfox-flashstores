import React from 'react';

import './SiteHeader.scss'
import { Container, Col } from 'reactstrap'

import HeaderImage from '../../images/iphone-tablet-mock.png'
import HeaderImageX2 from '../../images/iphone-tablet-mock@2x.png'

const SiteHeader = () => {
    return(
        <header className="header-container">
            <Container className="header-container-inner">
                <Col className="header-text">
                    <h1><span>Custom Online</span><br />Apparel & Promotional Stores</h1>
                    <ul>
                        <li>Customized Layouts</li>
                        <li>Mobile Optimized</li>
                        <li>Revenue Sharing</li>
                        <li>Customer Shipping Options</li>
                    </ul>
                </Col>
                <Col className="header-img">
                    <img 
                        src={HeaderImage}
                        src={HeaderImageX2}
                        alt="Screenshot of the stores" 
                        className="header-image-mockup"
                    />
                </Col>
            </Container>
        </header>
    );
}

export default SiteHeader;