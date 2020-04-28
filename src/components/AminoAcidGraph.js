import React from 'react';
import { Polar } from 'react-chartjs-2';


function AminoAcidGraph(props) {

    const aminoAmounts = props.aminoAcids.map(aminoAcid => aminoAcid.grams);
    const labels = props.aminoAcids.map(aminoAcid => aminoAcid.name);
    const colors = [
        '#E74C3C', // red
        '#884EA0', // purple
        '#7FB3D5', // light blue
        '#1ABC9C', // teal
        '#27AE60', // green
        '#F4D03F', // yellow
        '#DC7633', // orange
        '#D47FD5', // pink
        '#34495E', // charcoal
        '#641E16', // burgundy
        '#154360' // navy blue
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
        <Polar data={data}
        options={options}
        height={80}
        />
    );
}

export default AminoAcidGraph;