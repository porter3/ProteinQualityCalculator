import React from 'react';
import { Form, Button } from 'react-bootstrap';


function WeightInput(props) {
    console.log('WeightInput rendering');

    // hardcoded unit for now, will change to allow a selection
    const unit = 'grams';

    return (
        <Form>
            <Form.Group>
                <Form.Control onChange={props.onChange} type="number" placeholder={`Enter weight (${unit})`}></Form.Control>
                <Form.Text className="text-muted">Enter the total weight of the food in grams</Form.Text>
                <Button
                type="button"
                onClick={props.onClick}
                // onClick={() => console.log("you clicked me!!")}
                >
                Calculate
                </Button>
            </Form.Group>
        </Form>
    )
}

export default WeightInput;