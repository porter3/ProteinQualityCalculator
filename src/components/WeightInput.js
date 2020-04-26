import React from 'react';
import { Form, Button } from 'react-bootstrap';


function WeightInput(props) {

    // hardcoded unit for now, will change to allow a selection
    const unit = 'grams';

    return (
        <Form>
            <Form.Group>
                <Form.Control type="number" placeholder={`Enter weight (${unit})`}></Form.Control>
                <Button
                type="button"
                >
                Calculate
                </Button>
            </Form.Group>
        </Form>
    )
}

export default WeightInput;