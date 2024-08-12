// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

function validateCred(cards) {
    let currentDigit = 0;
    let counter = 1;
    let newArray = [];
    let total = 0;
    let rightIterable = cards.length  - 1;
    for (let i=rightIterable; i >= 0; i--) {
        currentDigit = cards[i];
        if(counter % 2 === 0) {
            currentDigit *= 2;
            if(currentDigit > 9) {
                currentDigit -= 9;
            }
            // console.log(currentDigit);
            newArray.push(currentDigit);
        }
        else{
            newArray.push(currentDigit);
        }
        counter++;
    }
    for (const val of newArray) {
        total += val;
    }
    // console.log(total)
    if(total % 10 === 0) {
        return true;
    }
    else {
        return false;
    }
}
function findInvalidCards(cardsBatch) {
    if(!Array.isArray(cardsBatch)) {
        console.log('Type Error');
    }
    else {
        let answer = true;
        const invalidCards = [];
        for(const cardArray of cardsBatch) {
            answer = validateCred(cardArray);
            if(answer !== true) {
                invalidCards.push(cardArray);
            }
        }
        return invalidCards;
    }
}

function idInvalidCardCompanies(invalidCards) {
    arrayOfCompanies = [];
    for(const cardArray of invalidCards) {
        var cardLength = cardArray.length;
        var companyNumber = cardArray[cardLength-1];
        switch (companyNumber) {
            case 3:
                if(!arrayOfCompanies.includes('Amex (American Express)')) {
                    arrayOfCompanies.push('Amex (American Express)');
                }
                break;
            case 4:
                if(!arrayOfCompanies.includes('Visa')) {
                    arrayOfCompanies.push('Visa');
                }
                break;
            case 5:
                if(!arrayOfCompanies.includes('Mastercard')) {
                    arrayOfCompanies.push('Mastercard');
                }
                break;
            case 6:
                if(!arrayOfCompanies.includes('Discover')) {
                    arrayOfCompanies.push('Discover');
                }
                break;
            default:
                console.log('Company not found.');
        }
    }
    return arrayOfCompanies;
}
function stringToIntArray(cardNumbers) {
    //validation:
    if(typeof cardNumbers !== 'string') {
        return 'Type Error- input of wrong value type entered.';
    }
    let companyNumber = cardNumbers.charAt(0);
    var mysteryCard = [companyNumber];
    for (i = 1; i < cardNumbers.length; i++) {
        mysteryCard.push(parseInt(cardNumbers[i]));
        console.log(cardNumbers[i]);
    }
    mysteryCard.reverse();
    return mysteryCard;
}
//tests
// let validTest = validateCred(valid1);
// console.log(validTest);
// let invalidTest = validateCred(invalid1);
// console.log(invalidTest);
var invalidCards = findInvalidCards(batch);

console.log(invalidCards);

var flaggedCompanies = idInvalidCardCompanies(invalidCards);
console.log(flaggedCompanies);
// let mysteryTest = validateCred(mystery4);
// console.log(mysteryTest);
// mysteryTest = validateCred(mystery5);
// console.log(mysteryTest);
// let mysteryTest = validateCred(invalid5);
// console.log(mysteryTest);
// mysteryTest = validateCred(invalid4);
// console.log(mysteryTest);
// let mysteryTest = validateCred(invalid3);
// console.log(mysteryTest);
// mysteryTest = validateCred(invalid2);
// console.log(mysteryTest);

var mysteryNum = '4532048570850725';
var mystery6 = stringToIntArray(mysteryNum);
mystery6.forEach((num) => console.log(num));