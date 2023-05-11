'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('i can drive');

const interface = 'Audio';
const private = 534;
const if = 23



function logger() {
    console.log('my name is Brad');
}

// calling / running / invoking the function
logger();

//apples and organges are the parameters
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

//the values (5, 0) are called the arguments 
//fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangejuice = fruitProcessor(2, 4);
console.log(appleOrangejuice);




// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991)

console.log(age1, age2)



// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Bradley'));
console.log(yearsUntilRetirement(1975, 'Bob'));



function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3))


const calcAge = function (birthYear) {
    return 2037 - birthYear
}


const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));



//Coding challenge #1

const calcAverage = (game1, game2, game3) => {
    const averageScore = (game1 + game2 + game3) / 3
    return averageScore
}

const avgDolphins = calcAverage(85, 54, 41);
console.log(avgDolphins);

const avgKoalas = calcAverage(23, 34, 27);
console.log(avgKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
    } else {
        return console.log('No Winner')
    }
}

console.log(checkWinner(avgDolphins, avgKoalas));

*/

const friend1 = 'Michael'
const friend2 = 'steven'
const friend3 = 'Peter'

const friends = ['Michal', 'Steven', 'Peter']
console.log(friends);

//this version is a function 
const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

//changing or mutating an arry 
friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', Alice]   // this doesnt work

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas)

// Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[4]);
console.log(age1, age2, age3)

console.table(years) // better way of logging an array to the console

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3]), calcAge(years[4])]
console.log(ages)




