import React from 'react';

import { Container, Row } from 'reactstrap'
import Steps from './Steps';

import './HowItWorks.scss';
import data from './data.json';

const HowItWorks = (props) => {

    console.log(props);
    const steps = data.steps;
    console.log(steps);

    return (
        <Container className="how-it-works">
            <h2>How it Works:</h2>
            <Row className="steps-top">
                {steps.slice(0,4).map (step => (
                    <Steps
                        key={step.id}
                        step={step.step}
                        title= {step.title}
                        description = {step.description}
                    />
                ))}
            </Row>

            <Row className="steps-bottom">
                {steps.slice(4,8).map (step => (
                    <Steps
                        key={step.id}
                        step={step.step}
                        title= {step.title}
                        description = {step.description}
                    />
                ))}
            </Row>

        </Container>
    )
}

export default HowItWorks;