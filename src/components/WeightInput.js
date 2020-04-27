import React from 'react';
import { Form, Button } from 'react-bootstrap';


function WeightInput(props) {

    // hardcoded unit for now, will change to allow a selection
    const unit = 'grams';

    return (
        <Form>
            <Form.Group>
                <Form.Control onChange={props.onChange} type="number" placeholder={`Enter weight (${unit})`}></Form.Control>
                <Button
                type="button"
                onClick={props.onClick}
                >
                Calculate
                </Button>
            </Form.Group>
        </Form>
    )
}

export default WeightInput;