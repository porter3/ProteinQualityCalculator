import React from 'react';
import { Pie } from 'react-chartjs-2';


function AminoAcidGraph(props) {

    const aminoAmounts = props.aminoAcids.map(aminoAcid => aminoAcid.grams);
    const labels = props.aminoAcids.map(aminoAcid => aminoAcid.name);
    const colors = [
        '#0037de',
        '#625ae3',
        '#8e7ee8',
        '#b2a3ec',
        '#d3c9ef',
        '#f1f1f1',
        '#f1cfce',
        '#eeadad',
        '#e88b8d',
        '#df676e',
        '#d43d51',
    ];
    const data = {
        datasets: [{
            data: aminoAmounts,
            backgroundColor: colors
        }],
        labels: labels
    };
    const options = {
        maintainAspectRatio: false,
        legend: {
            display: false
        }
    };

    return (
        <div style={{width: '500px'}}>
            <Pie data={data}
            options={options}
            height={280}
            width={280}
            />
        </div>
    );
}

export default AminoAcidGraph;