import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import WeightInput from './WeightInput';
import AminoAcidGraph from './AminoAcidGraph';



function AminoAcidTable(props) {
    console.log('AminoAcidTable rendering');
    

    const aminoAcidList = unit => {
        
        /*
        todo: unit is passed in as a parameter to determine what unit
        to use in the future. Will stay hardcoded as grams for now.
        */

        return props.aminoDetails.map((aa) => {
            return (
                <tr key={aa.name}>
                    <td>{aa.name}</td>
                    <td>{aa.grams}</td>
                </tr>
            );
        });
    }

    const totalProteinHeader =  <h4>Total Protein: {props.food.totalProtein}g</h4>;

    return (
        <>
            {props.food.totalProtein &&
                <>
                    <WeightInput
                    onChange={(e) => props.onChange(e)}
                    onClick={props.onClick}
                    weight={props.weight}
                    />
                        <div>
                            <h5>{props.food.name} ({props.food.weight}g)</h5>
                            {totalProteinHeader}
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
                    <AminoAcidGraph aminoAcids={props.aminoDetails} />
                </>
            }
        </>
    );
}

export default AminoAcidTable;