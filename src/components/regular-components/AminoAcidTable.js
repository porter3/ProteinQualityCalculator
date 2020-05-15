import React from 'react';
import { Table } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import '../css/AminoAcidTable.css';
import WeightInput from './WeightInput';
import getColorForRelativeAmount from '../helpers/getColorForRelativeAmount';



function AminoAcidTable(props) {

    const aminoAcidList = unit => {
        /*
        todo: unit is passed in as a parameter to determine what unit
        to use in the future. Will stay hardcoded as grams for now.
        */

        return props.aminoDetails.map((aa) => {
            const percentage = (aa.milligrams / props.food.totalProtein / 10).toFixed(2);
            return (
                <tr style={{backgroundColor: getColorForRelativeAmount(aa.relativeAmount)}} key={aa.name}>
                    <td>{aa.name}</td>
                    <td>{aa.milligrams}</td>
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
                                    <th>Quantity (mg)</th>
                                    <th>Percentage</th>
                                    <th>
                                        Relative Amount
                                        <FontAwesomeIcon
                                            data-tip="Determined by the percentage<br />of one gram of protein<br />the amino acid constitutes"
                                            data-multiline="true"
                                            icon={faQuestionCircle}
                                        />
                                        <ReactTooltip />
                                    </th>
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