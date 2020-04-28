function mapAminoAcids(foodDetails) {

    let grams, name, relativeAmount;
    const totalProtein = 30; // placeholder

    // maps nutrients to an array, then filters them if their name is empty
    return foodDetails.map(nutrient => {
        grams = nutrient.value;
        name = '';

        switch (nutrient.attr_id) {
            // tryptophan
            case 501:
                name = 'Tryptophan';
                relativeAmount = getRelativeAmount(grams, totalProtein, .0372);
                break;
            case 502:
                name ='Threonine';
                relativeAmount = getRelativeAmount(grams, totalProtein, .0745);
                break;
            case 503:
                name = 'Isoleucine';
                relativeAmount = getRelativeAmount(grams, totalProtein, .1064);
                break;
            case 504:
                name = 'Leucine';
                relativeAmount = getRelativeAmount(grams, totalProtein, .1489);
                break;
            case 505:
                name = 'Lysine';
                relativeAmount = getRelativeAmount(grams, totalProtein, .1277);
                break;
            /*
            Upper end thresholds for cases 506-509 are based on estimates
            since Methionine/Cysteine and Phenylalanine/Tyrosine
            are ground together in USDA reommendations
            */
            case 506:
                name = 'Methionine';
                relativeAmount = getRelativeAmount(grams, totalProtein, .0691);
                break;
            case 507:
                name = 'Cysteine';
                relativeAmount = getRelativeAmount(grams, totalProtein, .0691);
                break;
            case 508:
                name = 'Phenylalanine';
                relativeAmount = getRelativeAmount(grams, totalProtein, .0745);
                break;
            case 509:
                name = 'Tyrosine';
                relativeAmount = getRelativeAmount(grams, totalProtein, .0745);
                break;
            case 510:
                name = 'Valine';
                relativeAmount = getRelativeAmount(grams, totalProtein, .1064);
                break;
            // 511 is Arginine, leaving out on purpose
            case 512:
                name = 'Histidine';
                relativeAmount = getRelativeAmount(grams, totalProtein, .1064);
                break;
            default:
                break;
        }

        return ({
            grams: grams,
            name: name,
            relativeAmount: relativeAmount
        });
    })
        .filter(nutrient => {
            if (nutrient.name) {
                return true;
            }
            return false;
        });
}

/*
Takes the amount of the amino acid, total protein of the food,
and what percentage of the total protein is in line with USDA reommendations.
Returns whether that value is very low, low, middle, high, or very high
*/
function getRelativeAmount(aminoQuantity, totalProtein, recommendationAvg) {
    const upperThreshold = recommendationAvg * 2;
    const percentageOfProtein = aminoQuantity / totalProtein;
    let relativeAmount;
    if (percentageOfProtein <= upperThreshold * .2) {
        relativeAmount = 'very low';
    }
    else if (percentageOfProtein <= upperThreshold * .4) {
        relativeAmount = 'low';
    }
    else if (percentageOfProtein <= upperThreshold * .6) {
        relativeAmount = 'middle';
    }
    else if (percentageOfProtein <= upperThreshold * .8) {
        relativeAmount = 'high';
    }
    else {
        relativeAmount = 'very high';
    }
    return relativeAmount;
}

export default mapAminoAcids;