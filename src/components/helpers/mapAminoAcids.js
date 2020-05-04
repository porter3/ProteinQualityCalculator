function mapAminoAcids(foodDetails, totalProtein) {

    let milligrams, name, relativeAmount;

    // maps nutrients to an array, then filters them if their name is empty
    return foodDetails.map(nutrient => {
        milligrams = nutrient.value * 1000;
        name = '';

        switch (nutrient.attr_id) {
            // tryptophan
            case 501:
                name = 'Tryptophan';
                relativeAmount = getRelativeAmount(milligrams, totalProtein, 7);
                break;
            case 502:
                name ='Threonine';
                relativeAmount = getRelativeAmount(milligrams, totalProtein, 27);
                break;
            case 503:
                name = 'Isoleucine';
                relativeAmount = getRelativeAmount(milligrams, totalProtein, 25);
                break;
            case 504:
                name = 'Leucine';
                relativeAmount = getRelativeAmount(milligrams, totalProtein, 55);
                break;
            case 505:
                name = 'Lysine';
                relativeAmount = getRelativeAmount(milligrams, totalProtein, 51);
                break;
            /*
            Methionine/Cysteine and Phenylalanine/Tyrosine
            are combined in USDA reommendations, split their percentages 50/50 here
            */
            case 506:
                name = 'Methionine';
                relativeAmount = getRelativeAmount(milligrams, totalProtein, 12.5);
                break;
            case 507:
                name = 'Cysteine';
                relativeAmount = getRelativeAmount(milligrams, totalProtein, 12.5);
                break;
            case 508:
                name = 'Phenylalanine';
                relativeAmount = getRelativeAmount(milligrams, totalProtein, 23.5);
                break;
            case 509:
                name = 'Tyrosine';
                relativeAmount = getRelativeAmount(milligrams, totalProtein, 23.5);
                break;
            case 510:
                name = 'Valine';
                relativeAmount = getRelativeAmount(milligrams, totalProtein, 32);
                break;
            // 511 is Arginine, leaving out on purpose
            case 512:
                name = 'Histidine';
                relativeAmount = getRelativeAmount(milligrams, totalProtein, 18);
                break;
            default:
                break;
        }

        return ({
            milligrams: milligrams,
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