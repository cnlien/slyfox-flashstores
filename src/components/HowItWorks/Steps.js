import React from 'react';

import { Col } from 'reactstrap';

const Steps = (props) => {
    return (
        <Col>
            <h4>{props.step}. {props.title}</h4>
            <p>{props.description}</p>
        </Col>
    )
}

export default Steps;