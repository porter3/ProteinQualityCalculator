import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/searchResult.css';

function SearchResult(props) {
    const foodName = props.food.foodName;

    /*
    Analyze button is currently a <button> element instead of React Bootstrap's
    Button component. Trying to get it vertically aligned in it's container as the
    original element first before trying to go back to the R-B component.
    */

    return (
        <Row>
            <Col xs={8}>
                <h5>{foodName}</h5>
                {
                    props.food.photo &&
                    <img
                    width="80"
                    src={props.food.photo}
                    alt={props.food.foodName}
                    />
                }
            </Col>
            <Col xs={4}>
                <div className="parent">
                    <button 
                        onClick={props.onClick}
                        type="button"
                        variant="outline-info"
                        className="btn btn-outline-info"
                        >
                        Analyze
                    </button>
                </div>
            </Col>
        </Row>
    );
}



export default SearchResult;