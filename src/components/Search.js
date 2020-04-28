import React from 'react';
import { Button, Form } from 'react-bootstrap';


function Search(props) {

    return (
        <Form inline>
            <Form.Control type="text"
            placeholder="Search food list"
            id="searchBox"
            />
            <Button onClick={props.onClick}>Search</Button>
            <Form.Text className="text-muted">
                Search for the type of food you want to analyze
            </Form.Text>
        </Form>

    );
}

export default Search;