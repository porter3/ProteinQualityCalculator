import React from 'react';
import { Button, Form } from 'react-bootstrap';


function Search(props) {

    return (
        <Form>
            <Form.Group controlId="initialSearch">
                <Form.Control type="text" placeholder="Search food list" />
                <Form.Text className="text-muted">
                    Search for the type of food you want to analyze
                </Form.Text>
                <Button onClick={props.onClick}>Search</Button>
            </Form.Group>
        </Form>

    );
}

export default Search;