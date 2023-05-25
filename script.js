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



const friends = ['Michal', 'Steven', 'Peter']
const newLength = friends.push('Jay')
console.table(newLength)

// Push method
// friends.push('Jay');
// console.log(friends);
// console.table(friends);

//unshift method
friends.unshift('John');
console.table(friends);

//pop Method
friends.pop();
const popped = friends.pop();
console.log(popped);
console.table(friends);

//shift method
friends.shift();
console.table(friends);

console.log(friends.indexOf('Steven'));

friends.push(23);
console.log(friends.includes('23'));
console.log(friends.includes(23));
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Steven')) {
    console.log('you have a friend called Steven')
}



//Codding Challenge #2

const calcTip = function (bill) {
    let tip
    (bill >= 50) && (bill <= 300) ? tip = bill * 0.15 : tip = bill * 0.20;
    return tip
}

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1]),]

console.table(tips)

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[bills.length - 1] + tips[tips.length - 1]];

console.table(totals)



const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    friends: ['Michael', 'Peter', 'Steven']
};

console.table(jonas);



const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: "teacher",
    friends: ['Michael', 'Peter', 'Steven']
};

console.table(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//const interestedIn = prompt('what do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('wrong request, Choose between firstName, lastName, age, job, and friends ')
// }

jonas.location = 'portugal';
jonas['twitter'] = '@jonasschmedtmann';
console.table(jonas);

//challenge
// "jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)



const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: "teacher",
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    //     calcAge: function (birthYear) {
    //         return 2037 - birthYear;
    //     }
    // };

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicense = true ? 'a' : 'no'} driver's license`

    }
}

console.log(jonas.calcAge());
console.log(jonas.age);

//Challenge
//"Jonas is a 40-year old teacher, and he has a driver's license"
//"Jonas is a 40-year old teacher, and he has no driver's license"
console.log(jonas.getSummary());

*/

//Coding Challenge #3

const mark = {
    fullName: "Mark Miler",
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2
        return this.bmi;
    }
};

console.table(mark);
console.log(mark.calcBMI());
console.log(mark.bmi);

const john = {
    fullName: "John Smith",
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2
        return this.bmi;
    }
};

console.table(john);
console.log(john.calcBMI());
console.log(john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI ${mark.bmi}`)
};

