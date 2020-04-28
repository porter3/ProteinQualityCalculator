import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

function SearchResult(props) {
    const foodName = props.food.foodName;

    return (
        <ListGroup horizontal>
            <ListGroup.Item>{foodName}</ListGroup.Item>
            <ListGroup.Item>
                <img 
                    width="80"
                    src={props.food.photo}
                    alt={props.food.foodName}
                />
            </ListGroup.Item>
            <ListGroup.Item>
                <Button  onClick={props.onClick}
                  
                    type="button"
                    variant="outline-dark">
                    Analyze
                </Button>
            </ListGroup.Item>
        </ListGroup>
    );
}



export default SearchResult;