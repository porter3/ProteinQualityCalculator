import React, { useState } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import Search from './Search';
import SearchResultTable from './SearchResultTable';
import AminoAcidTable from './AminoAcidTable';
import HistoryTable from './HistoryTable';

function App() {

  const [ initialQuery, setInitialQuery ] = useState('');
  const [ detailQuery, setDetailQuery ] = useState('');
  const [ quantityGrams, setQuantityGrams ] = useState('');


  // post search query
  const handleInitialSearch = () => {
    const appId = 'c8e7e023';
    const appKey = '717eef2cdf01a4215328e3ccc428f6b4';
    console.log('Querying...');

    $.ajax({
      headers: {
        'x-app-id': appId,
        'x-app-key': appKey
      },
      type: "GET",
      url: "https://trackapi.nutritionix.com/v2/search/instant?query=chicken breast",
      success: function (response) {
        console.log(response);
      }
    });
  }

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Search onClick={handleInitialSearch}/>
          <SearchResultTable />
        </Col>
        <Col xs={6}>
          <AminoAcidTable />
          <HistoryTable />
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
