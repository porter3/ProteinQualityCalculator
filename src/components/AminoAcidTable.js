import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import WeightInput from './WeightInput';
import AminoAcidGraph from './AminoAcidGraph';
import mapAminoAcids from './helpers/mapAminoAcids';



function AminoAcidTable(props) {
    
    const aminoAcids = mapAminoAcids(props.foodDetails);
    const aminoAcidList = unit => {
        
        /*
        todo: unit is passed in as a parameter to determine what unit
        to use in the future. Will stay hardcoded as grams for now.
        */

        return aminoAcids.map((aa) => {
            return (
                <tr key={aa.name}>
                    <td>{aa.name}</td>
                    <td>{aa.grams}</td>
                </tr>
            );
        });
    }
    console.log('aa table rendering');

    const [ weight, setWeight ] = useState(props.foodDetails.totalProtein);
    const [ calculatedAminoAmounts, setCalculatedAminoAmounts ] = useState(aminoAcids);

    // use grams input to convert amino acid amounts
    const handleCalculation = () => {
        // factor is equal to the grams input divided by the initial serving size in grams 
        const factor = weight / props.food.totalProtein;
        console.log('grams: ', weight);
        console.log('factor: ', factor);
        const modifiedAminoAmounts = aminoAcids.map((amino) => {
            const calculatedGrams = amino.grams * factor;
            return ({
                grams: calculatedGrams,
                name: amino.name
            });
        });
        setCalculatedAminoAmounts(modifiedAminoAmounts);
    };

    const handleChange = (event) => {
        console.dir(event.target.value);
        setWeight(event.target.value);
    };

    return (
        <>
            {props.food.totalProtein &&
                <>
                    <WeightInput onChange={handleChange} onClick={() => handleCalculation()} />
                        <div>
                            <h5>{props.food.foodName}</h5>
                            <img 
                                src={props.food.photo}
                                alt={props.food.foodName}
                            />
                            <h4>
                                Total Protein: {props.food.totalProtein}g
                            </h4>
                        </div>
                    <Table>
                        <tbody>
                            {aminoAcidList().length !== 0 &&
                                <tr>
                                    <th>Amino Acid</th>
                                    <th>Quantity (g)</th>
                                </tr>
                            }
                            {aminoAcidList()}
                        </tbody>
                    </Table>
                    <AminoAcidGraph aminoAcids={aminoAcids} />
                </>
            }
        </>
    );
}

export default AminoAcidTable;