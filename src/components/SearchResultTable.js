import React from 'react';
import './css/SearchResultTable.css'
import SearchResult from './SearchResult';


function SearchResultTable(props) {

    const foodListItems = props.foodList.map((food, index) => {
        return (
            <SearchResult
                key={food.foodName}
                food={food}
                onClick={() => props.onClick(food.foodName)}
            />
        );
    });

    return (
        <ul>
            {foodListItems}
        </ul>
    );
}

export default SearchResultTable;