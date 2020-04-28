const capitalizeAllStringsAtStart = (string, delimiter = ' ') => {
    const stringArray = string.split(delimiter);
    let capitalizedStrings = '';
    let uppercaseChar;
    for (let i = 0; i < stringArray.length; i++) {
        uppercaseChar = stringArray[i].charAt(0).toUpperCase();
        capitalizedStrings += uppercaseChar + stringArray[i].slice(1) + delimiter;
    }
    return capitalizedStrings;
}


export default capitalizeAllStringsAtStart;