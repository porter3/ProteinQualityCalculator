import React, { useState } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import Search from './Search';
import SearchResultTable from './SearchResultTable';
import AminoAcidTable from './AminoAcidTable';
import HistoryTable from './HistoryTable';

function App() {

  console.log('App rendering');

  const [ foodList, setFoodList ] = useState([]);
  const [ food, setFood ] = useState({});
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
    
    const foodArray = [
      {
        foodName: 'chicken',
        photo: 'https://photos.bigoven.com/recipe/hero/baked-garlic-brown-sugar-chicken-4.jpg?h=500&w=500'
      }
    ];
    setFoodList(foodArray);
  }

  // make request for the specific food selected by user
  const analyzeFood = () => {

        const foodInfo = {
          full_nutrients: [
            {
              attr_id: 501,
              value: 2.0
            },
            {
              attr_id: 502,
              value: 2.0
            },
            {
              attr_id: 503,
              value: 2.0
            },
            {
              attr_id: 504,
              value: 2.0
            },
            {
              attr_id: 505,
              value: 2.0
            },
            {
              attr_id: 506,
              value: 2.0
            },
            {
              attr_id: 507,
              value: 2.0
            },
            {
              attr_id: 508,
              value: 2.0
            },
            {
              attr_id: 509,
              value: 2.0
            },
            {
              attr_id: 510,
              value: 2.0
            },
            {
              attr_id: 512,
              value: 2.0
            }
          ]
        };
        setFood({
          totalProtein: 50,
          photo: 'https://photos.bigoven.com/recipe/hero/baked-garlic-brown-sugar-chicken-4.jpg?h=500&w=500'
        });
        setFoodDetails(foodInfo.full_nutrients);
  }

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Search onClick={handleInitialSearch} />
          <SearchResultTable onClick={(foodName) => analyzeFood(foodName)} foodList={foodList} />
        </Col>
        <Col md={6}>
          <AminoAcidTable food={food} foodDetails={foodDetails} />
          <HistoryTable />
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
