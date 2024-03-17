/*"use strict";
if (4 == 4) {
    console.log('OK!');
} else {
    console.log('Error')
}


const num = 50;

if (num<49) {
    console.log('Error');
} else if (num>100) {
    console.log('More');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error');


const nmn = 550;

switch (nmn) {
    case 49:
        console.log('error');
        break;
    case 100:
        console.log('error 2');
        break;
    case 50:
        console.log('yes');
        break;
    default:
         console.log('not today')
         break;
}

//logic operators
const humburger = 2;
const fries = 1;

if (humburger == 3 && fries) {
    console.log('I am OK!')
} else {
    console.log((humburger && fries));
}

//cycle
let nm = 50;

//while (nm <= 55) {
//    console.log(nm);
//    num++;
//}

//do {
//    console.log(nm);
//    num++;
//}
//while(num<55);

//for (let i = 1; i < 10; i++) {
//    console.log(nm);
//    nm++;
//}


for (let i = 1; i < 20; i++) {
    if (i === 6) {
        //break;
        continue;
    }
    console.log(i);
}


//function
//function showFirstMessage() {
//    console.log('Hello Worls')
//}
//showFirstMessage();

function showFirstMessage(text) {
    console.log(text);
}
showFirstMessage('Hello World');


function calc(a, b) {
    return (a+b);
}

console.log(calc(4, 3));
console.log(calc(7, 9));
console.log(calc(1, 5));


const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

promotion(convert(500, usdCurr));
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 5) return
    }
    console.log('Done')
}

test();


const str = "test";
const arr = [1, 2, 4];

console.log(arr.length);


const strn = "test";
 
const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "Hello world";
console.log(logg.slice(6, 11));
console.log(logg.substrign(6, 11));
console.log(logg.substr(6, 11)); // 3=1result

const numm = 12.2;
console.log(Math.round(numm));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
*/

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один и последний просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }

    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы класический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка")
    }
}

detectPersonalLevel();

function showMyBD (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB)

console.log(personalMovieDB);  

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj;
copy.a = 10;
console.log(copy);
console.log(obj);


function copyT(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}


//Раздел 13. spread оператор 
const video = ['youtube', 'vimeo', 'rutube'],
    blog = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blog, 'vk', 'facebook'];

    console.log(internet);



function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c)
}

const num = [2, 5, 7];
log(...num);

const newArray = [...array];
const q = {
    one: 1,
    two: 2
};
const newObj = {...q};

//Основы ООП, прототипно-ориентированное наследование
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = Object.create(soldier);

console.log(typeOf(String(null)));
console.log(typeOf(String(4)));

let admin, name;
name = "John";
admin = name;
alert(admin);