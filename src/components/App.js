import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import Search from './Search';
import SearchResultTable from './SearchResultTable';
import AminoAcidTable from './AminoAcidTable';
import HistoryTable from './HistoryTable';
import mapAminoAcids from './helpers/mapAminoAcids';


function App() {
  console.log('App rendering');

  // initial search results
  const [ foodList, setFoodList ] = useState([]);
  // a specific food's name, weight, protein in grams, and photo link
  const [ food, setFood ] = useState({});
  // a specific food's amino acid details ([{grams: '', name: ''}])
  const [ aminoDetails, setAminoDetails ] = useState([]);
  // holds the weight input
  const [ weight, setWeight ] = useState('');


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

  // handle weight input changes
  const handleChange = (event) => {
    console.dir(event.target.value);
    setWeight(event.target.value);
};

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
          name: 'chicken',
          weight: 100, // In master, this should be set to the weight property of foodInfo
          totalProtein: 50,
          photo: 'https://photos.bigoven.com/recipe/hero/baked-garlic-brown-sugar-chicken-4.jpg?h=500&w=500'
        });
        setAminoDetails(mapAminoAcids(foodInfo.full_nutrients));
  }

  const aminoAcids = mapAminoAcids(aminoDetails);

  // use grams input to convert protein and amino acid amounts
  const handleCalculation = (e) => {
    // factor is equal to the grams input divided by the initial serving size in grams 
    const factor = weight / food.weight;
    console.log('FACTOR: ', factor);
    const calculatedAminoAcids = aminoAcids.map((amino) => {
        const calculatedGrams = amino.grams * factor;
        return ({
            grams: calculatedGrams,
            name: amino.name
        });
    });
    setAminoDetails(calculatedAminoAcids);
    console.log('AMINO DETAILS: ', aminoDetails);

    const calculatedProtein = food.totalProtein * factor;
    setFood({
      name: food.name,
      weight: weight,
      totalProtein: calculatedProtein,
      photo: food.photo
    });
};

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Search onClick={handleInitialSearch} />
          <SearchResultTable onClick={(foodName) => analyzeFood(foodName)} foodList={foodList} />
        </Col>
        <Col md={6}>
          <AminoAcidTable
          food={food}
          aminoDetails={aminoDetails}
          onClick={(e) => handleCalculation(e)}
          onChange={(e) => handleChange(e)} />
          <HistoryTable />
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
