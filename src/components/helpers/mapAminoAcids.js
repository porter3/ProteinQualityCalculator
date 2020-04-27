function mapAminoAcids(foodDetails) {
    let grams, name;

    // maps nutrients to an array, then filters them if their name is empty
    return foodDetails.map(nutrient => {
        grams = nutrient.value;
        name = '';

        switch (nutrient.attr_id) {
            // tryptophan
            case 501:
                name = 'Tryptophan';
                break;
            case 502:
                name ='Threonine';
                break;
            case 503:
                name = 'Isoleucine';
                break;
            case 504:
                name = 'Leucine';
                break;
            case 505:
                name = 'Lysine';
                break;
            case 506:
                name = 'Methionine';
                break;
            case 507:
                name = 'Cysteine';
                break;
            case 508:
                name = 'Phenylalanine';
                break;
            case 509:
                name = 'Tyrosine';
                break;
            case 510:
                name = 'Valine';
                break;
            // 511 is Arginine, leaving out on purpose
            case 512:
                name = 'Histidine';
                break;
            default:
                break;
        }

        return ({
            grams: grams,
            name: name
        });
    })
        .filter(nutrient => {
            if (nutrient.name) {
                return true;
            }
            return false;
        });
}

export default mapAminoAcids;