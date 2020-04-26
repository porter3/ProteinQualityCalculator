import React from 'react';
import { Table } from 'react-bootstrap';
import WeightInput from './WeightInput';
import mapAminoAcids from './helpers/mapAminoAcids';



function AminoAcidTable(props) {
    
    const aminoAcids = mapAminoAcids(props.foodDetails);
    console.log(aminoAcids);

    return (
        <>
            <WeightInput />
            <Table>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default AminoAcidTable;