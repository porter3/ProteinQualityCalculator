import React, { useState } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import Search from './Search';
import SearchResultTable from './SearchResultTable';
import AminoAcidTable from './AminoAcidTable';
import HistoryTable from './HistoryTable';

function App() {

  const [ foodList, setFoodList ] = useState([]);
  const [ foodDetails, setFoodDetails ] = useState([]);

  const appId = 'c8e7e023';
  const appKey = '717eef2cdf01a4215328e3ccc428f6b4';
  const headers = {
    'x-app-id': appId,
    'x-app-key': appKey
  };
  const responseErrorMsg = (xhr) => {
    return 'Request status: ' + xhr.status + '\nStatus text: ' + xhr.statusText + '\n\n' + xhr.responseText;
  }


  // make request for a list of foods,set state to that list
  const handleInitialSearch = () => {
    $.ajax({
      headers: headers,
      type: "GET",
      url: "https://trackapi.nutritionix.com/v2/search/instant?query=chicken breast",
      success: response => {
        const foodArray = response.common.map(food => {
          return {
            foodName: food.food_name,
            photo: food.photo.thumb
          }
        });
        setFoodList(foodArray);
      },
      error: xhr => {
        console.log(responseErrorMsg(xhr));
      }
    });
  }

  // make request for the specific food selected by user
  const analyzeFood = (foodName) => {
    const query = {"query": foodName}

    // using JSON.stringify(query) gets a 400 response. Unsure why.
    $.ajax({
      headers: headers,
      type: "POST",
      url: "https://trackapi.nutritionix.com/v2/natural/nutrients",
      data: query,
      success: response => {
        setFoodDetails(response.foods[0].full_nutrients);
      },
      error: xhr => {
        console.log(responseErrorMsg(xhr));
      }
    });
  }

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Search onClick={handleInitialSearch} />
          <SearchResultTable onClick={(foodName) => analyzeFood(foodName)} foodList={foodList} />
        </Col>
        <Col xs={6}>
          <AminoAcidTable foodDetails={foodDetails} />
          <HistoryTable />
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
