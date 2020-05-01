export default function getColorForRelativeAmount(relativeAmount) {
    switch (relativeAmount) {
        case 'VERY LOW':
            return '#FFA4A4'; // red
        case 'LOW':
            return '#FFBD88'; // orange
        case 'MEDIUM':
            return '#FFFD88'; // yellow
        case 'HIGH':
            return '#88D7FF'; // blue
        case 'VERY HIGH':
            return '#93FF88'; // green
        default:
            return '#FFFFFF'; // white
    }
}