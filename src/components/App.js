import React, { useState } from 'react';
import $ from 'jquery';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './css/app.css';
import './css/proteinQualityCalculator.css';
import { Container, Row, Col } from 'react-bootstrap';
import Search from './Search';
import SearchResultTable from './SearchResultTable';
import AminoAcidTable from './AminoAcidTable';
import HistoryTable from './HistoryTable';
import AminoAcidGraph from './AminoAcidGraph';
import mapAminoAcids from './helpers/mapAminoAcids';
import capitalizeAllStringsAtStart from './helpers/capitalizeAllStringsAtStart';


function App() {

  // initial query
  const [ initialQuery, setInitialQuery ] = useState('');
  // initial search results
  const [ foodList, setFoodList ] = useState([]);
  // a specific food's name, weight, protein in grams, and photo link
  const [ food, setFood ] = useState({});
  // a specific food's amino acid details ([{grams: '', name: ''}])
  const [ aminoDetails, setAminoDetails ] = useState([]);
  // holds the weight input
  const [ weight, setWeight ] = useState('');

  const appId = 'c8e7e023';
  const appKey = '717eef2cdf01a4215328e3ccc428f6b4';
  const headers = {
    'x-app-id': appId,
    'x-app-key': appKey
  };
  const responseErrorMsg = xhr => {
    return 'Request status: ' + xhr.status + '\nStatus text: ' + xhr.statusText + '\n\n' + xhr.responseText;
  }


  // make request for a list of foods, set state to that list

  const handleInitialSearch = () => {
    axios.get('https://trackapi.nutritionix.com/v2/search/instant?query=' + initialQuery, null, headers)
      .then(response => {
        const foodArray = response.common.map(food => {
          return {
            foodName: capitalizeAllStringsAtStart(food.food_name),
            photo: food.photo.thumb
          }
        });
        setFoodList(foodArray);
      })
      .catch(error => {
        console.log(responseErrorMsg(error));
      })
  }

  // handle form input changes for both intial query and custom food weight
  const handleChange = event => {
    event.target.id === 'searchBox' ? setInitialQuery(event.target.value) : setWeight(event.target.value);
};

  // make request for the specific food selected by user
  const analyzeFood = foodName => {
    const query = {"query": foodName}
    console.log('query: ', query);

    // using JSON.stringify(query) gets a 400 response. Unsure why.
    $.ajax({
      headers: headers,
      type: "POST",
      url: "https://trackapi.nutritionix.com/v2/natural/nutrients",
      data: query,
      success: response => {
        const foodInfo = response.foods[0];
        setFood({
          name: capitalizeAllStringsAtStart(foodInfo.food_name),
          weight: foodInfo.serving_weight_grams,
          totalProtein: foodInfo.nf_protein,
          photo: foodInfo.photo.thumb
        });
        setAminoDetails(mapAminoAcids(foodInfo.full_nutrients, foodInfo.nf_protein));
      },
      error: xhr => {
        console.log(responseErrorMsg(xhr));
      }
    });
  }

  // use grams input to convert protein and amino acid amounts
  const handleCalculation = () => {
    // factor is equal to the grams input divided by the initial serving size in grams 
    const factor = weight / food.weight;
    let calculatedMg;
    const calculatedAminoAcids = aminoDetails.map((amino) => {
        calculatedMg = (amino.milligrams * factor).toFixed(1);
        return Object.assign({}, amino, { milligrams: calculatedMg });
    });
    setAminoDetails(calculatedAminoAcids);

    const calculatedProtein = food.totalProtein * factor;
    setFood({
      name: food.name,
      weight: weight,
      totalProtein: calculatedProtein,
      photo: food.photo
    });
};

  return (
    <Container className="app">
      <Row>
        <Col xl={4}>
        <div>
          <Search onClick={(e) => handleInitialSearch(e)} onChange={(e) => handleChange(e)} />
          <hr />
          <SearchResultTable onClick={(foodName) => analyzeFood(foodName)} foodList={foodList} />
        </div>
        </Col>
        <Col xl={4}>
          <AminoAcidTable
          food={food}
          aminoDetails={aminoDetails}
          onClick={() => handleCalculation()}
          onChange={(e) => handleChange(e)} />
          {
            food.name && aminoDetails.length === 0 &&
              <h5 style={{color: 'red'}}>Amino acid details not found for that item</h5>
          }
          <HistoryTable />
        </Col>
        {
          aminoDetails.length !== 0 &&
            <Col xl={4}>
              <AminoAcidGraph aminoAcids={aminoDetails} />
            </Col>
        }
      </Row>
    </Container>
    
  );
}

export default App;
