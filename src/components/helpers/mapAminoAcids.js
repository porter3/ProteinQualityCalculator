function mapAminoAcids(foodDetails, totalProtein) {

    let grams, name, relativeAmount;

    // maps nutrients to an array, then filters them if their name is empty
    return foodDetails.map(nutrient => {
        grams = nutrient.value;
        name = '';

        switch (nutrient.attr_id) {
            // tryptophan
            case 501:
                name = 'Tryptophan';
                relativeAmount = getRelativeAmount(grams, totalProtein, .007);
                break;
            case 502:
                name ='Threonine';
                relativeAmount = getRelativeAmount(grams, totalProtein, .027);
                break;
            case 503:
                name = 'Isoleucine';
                relativeAmount = getRelativeAmount(grams, totalProtein, .025);
                break;
            case 504:
                name = 'Leucine';
                relativeAmount = getRelativeAmount(grams, totalProtein, .055);
                break;
            case 505:
                name = 'Lysine';
                relativeAmount = getRelativeAmount(grams, totalProtein, .051);
                break;
            /*
            Methionine/Cysteine and Phenylalanine/Tyrosine
            are combined in USDA reommendations, split their percentages 50/50 here
            */
            case 506:
                name = 'Methionine';
                relativeAmount = getRelativeAmount(grams, totalProtein, .0125);
                break;
            case 507:
                name = 'Cysteine';
                relativeAmount = getRelativeAmount(grams, totalProtein, .0125);
                break;
            case 508:
                name = 'Phenylalanine';
                relativeAmount = getRelativeAmount(grams, totalProtein, .0235);
                break;
            case 509:
                name = 'Tyrosine';
                relativeAmount = getRelativeAmount(grams, totalProtein, .0235);
                break;
            case 510:
                name = 'Valine';
                relativeAmount = getRelativeAmount(grams, totalProtein, .032);
                break;
            // 511 is Arginine, leaving out on purpose
            case 512:
                name = 'Histidine';
                relativeAmount = getRelativeAmount(grams, totalProtein, .018);
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
Takes the amount of the amino acid, the total protein of the food,
and the 'optimal' amount of the amino acid per gram (from USDA recommendations).
Returns a relative value in the range of very low - very high.
*/

function getRelativeAmount(aminoQuantity, totalProtein, idealAmount) {
    const aminoPerGram = aminoQuantity / totalProtein;
    let relativeAmount;
    if (aminoPerGram <= idealAmount * .4) {
        relativeAmount = 'VERY LOW';
    }
    else if (aminoPerGram <= idealAmount * .8) {
        relativeAmount = 'LOW';
    }
    else if (aminoPerGram <= idealAmount * 1.2) {
        relativeAmount = 'MEDIUM';
    }
    else if (aminoPerGram <= idealAmount * 1.6) {
        relativeAmount = 'HIGH';
    }
    else {
        relativeAmount = 'VERY HIGH';
    }
    return relativeAmount;
}

export default mapAminoAcids;