import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/searchResult.css';

function SearchResult(props) {
    const foodName = props.food.foodName;

    return (
        <Row>
            <Col xs={6}>
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
            <Col xs={6}>
                <div className="parent">
                    <button 
                        onClick={props.onClick}
                        type="button"
                        variant="outline-dark"
                        className="btn btn-outline-dark"
                        >
                        Analyze
                    </button>
                </div>
            </Col>
        </Row>
    );
}



export default SearchResult;