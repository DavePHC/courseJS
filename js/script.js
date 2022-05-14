'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
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

const countFilm = personalMovieDB.count;

function detectPersonalLevel(){
    if (countFilm < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (countFilm <= 30) {
        alert('Вы классический зритель');
    } else if (countFilm > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

// detectPersonalLevel();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const question = prompt('Один из последних просмотренных фильмов?', ''),
              answer = prompt('На сколько оцените его?', '');
    
        if (question != null && answer != null && question != '' && answer != '' && question.length < 50) {
            personalMovieDB.movies[question] = answer;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();

function showMyDB() {
    const privateStatus = personalMovieDB.privat;

    if(privateStatus == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

// //  Классический if else

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('ok!');
// }

// (num === 50) ? console.log('ok'): console.log('Error');


// // Условие Switch case

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('No!');
//         break;
//     case 100:
//         console.log('No!');
//         break;
//     case 50:
//         console.log('Ok');
//         break;
//     default:
//         console.log('No yet');
//         break;
// }

// // Циклы

// // While

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// // Do While

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// // For

// for (let i = 1; i < 8; i++) {
//     if(i === 6) {
//         continue;
//     }

//     console.log(i);
// }

// function showFirstMessage(text) {
//     console.log(text);
// }

// showFirstMessage('Что вам тут наааадо?');


const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('Test');
    }
};

options.makeTest();

console.log(Object.keys(options).length);

const{border, bg} = options.colors;

console.log(border);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object' ) {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);

const arr = ['a', 'b', 'c'];

console.log(arr[1]);

const arrObj = {
    0: 'a',
    1: 'b',
    2: 'c'
};

// arrObj['a'] = 'hi';

let a;

arrObj[a] = 'hi';

console.log(arrObj.a);

// Logical operators

const beer = true,
      hamburger = true;

if (beer && hamburger) {
    console.log('Бургеров возьмём, пивка, посмеёмся, и всем проблемам пиздец');
}

// let result = '';

// const rowCount = 7;

// for (let i = 2; i < rowCount; i++) {
    
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += '\n';
// }

// console.log(result);


first: for (let i = 0; i < 3; i++) {
    console.log(`first level ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`second level ${j}`);
       for (let k = 0; k < 3; k++) {
           if(k===2) {continue first;}
        console.log(`third level ${k}`);
       }
    }
}

{
   const lines = 6;
   const result = '';

   for (let i = 0; i < lines; i++) {
       
   }
}

