import React from 'react';
// Provider makes the store available to any nested components wrapped in connect()
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';
import './components/css/app.css';
import './components/css/proteinQualityCalculator.css';
import { Container, Row, Col } from 'react-bootstrap';
import Search from './components/redux-components/Search';
import SearchResultTable from './components/regular-components/SearchResultTable';
import AminoAcidTable from './components/regular-components/AminoAcidTable';
import HistoryTable from './components/regular-components/HistoryTable';
import AminoAcidGraph from './components/regular-components/AminoAcidGraph';


export default function App() {
    return (
        <Provider store={store}>
            <Container className="app">
                <Row>
                    {/* <Col xl={4}>
                        <div> */}
                            <Search />
                            {/* <hr />
                            <SearchResultTable />
                        </div>
                    </Col>
                    <Col xl={4}>
                        <AminoAcidTable />
                        <HistoryTable />
                    </Col> */}
                    {/* {
                        aminoDetails.length !== 0 &&
                        <Col xl={4}>
                            <AminoAcidGraph aminoAcids={aminoDetails} />
                        </Col>
                    } */}
                </Row>
            </Container>
        </Provider>
    )
}