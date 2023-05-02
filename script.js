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

*/


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

