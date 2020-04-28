import React from 'react';
import { Form, Button } from 'react-bootstrap';


function WeightInput(props) {

    // hardcoded unit for now, will change to allow a selection
    const unit = 'grams';

    return (
        <Form inline>
                <Form.Control onChange={props.onChange} type="number" placeholder={`Enter weight (${unit})`}></Form.Control>
                <Button
                    type="button"
                    variant="outline-dark"
                    onClick={props.onClick}
                >
                    Calculate
                </Button>
                <Form.Text className="text-muted">
                    Enter the total weight of the food in grams (optional)
                </Form.Text>
        </Form>
    )
}

export default WeightInput;