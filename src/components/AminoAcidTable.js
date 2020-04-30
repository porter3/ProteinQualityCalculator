import React from 'react';
import { Table } from 'react-bootstrap';
import WeightInput from './WeightInput';



function AminoAcidTable(props) {

    const aminoAcidList = unit => {
        /*
        todo: unit is passed in as a parameter to determine what unit
        to use in the future. Will stay hardcoded as grams for now.
        */

        return props.aminoDetails.map((aa) => {
            const percentage = (aa.grams / props.food.totalProtein * 100).toFixed(2);
            // relativeAmount function is buggy at the moment, still letting it display
            return (
                <tr key={aa.name}>
                    <td>{aa.name}</td>
                    <td>{aa.grams}</td>
                    <td>{percentage}%</td>
                    <td>{aa.relativeAmount}</td>
                </tr>
            );
        });
    }

    const aaList = aminoAcidList();

    return (
        <>
            {props.food.totalProtein &&
                <>
                    <WeightInput
                        onChange={props.onChange}
                        onClick={props.onClick}
                        weight={props.weight}
                    />
                    <hr />
                        <div>
                            <h5>{props.food.name} ({props.food.weight}g)</h5>
                            <h4>Total Protein: {props.food.totalProtein}g</h4>
                        </div>
                    <Table>
                        <tbody>
                            {aaList.length !== 0 &&
                                <tr>
                                    <th>Amino Acid</th>
                                    <th>Quantity (g)</th>
                                    <th>Percentage</th>
                                </tr>
                            }
                            {aaList}
                        </tbody>
                    </Table>
                </>
            }
        </>
    );
}

export default AminoAcidTable;