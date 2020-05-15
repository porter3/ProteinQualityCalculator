import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Button, Form } from 'react-bootstrap';
import { getSearchResults } from '../../redux'


function Search({ getSearchResults }) {

    const [ query, setQuery ] = useState('')

    const handleChange = e => {
        setQuery(e.target.value)
    }

    return (
        <Form inline>
            <Form.Control
            type="text"
            placeholder="Search food list"
            id="searchBox"
            onChange={handleChange}
            />
            <Button
                variant="outline-dark"
                onClick={() => getSearchResults(query)}
                >
                Search
            </Button>
            <Form.Text className="text-muted">
                Search for the type of food you want to analyze
            </Form.Text>
        </Form>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSearchResults: query => dispatch(getSearchResults(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);