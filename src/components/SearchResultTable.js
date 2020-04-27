import React from 'react';
import './css/SearchResultTable.css' // unused at the moment
import SearchResult from './SearchResult';


function SearchResultTable(props) {
    console.log('SearchResultTable rendering');

    const foodListItems = props.foodList.map((food) => {
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