'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const countFilm = personalMovieDB.count;



// if (countFilm < 10) {
//     alert('Просмотрено довольно мало фильмов');
// } else if (countFilm <= 30) {
//     alert('Вы классический зритель');
// } else if (countFilm > 30) {
//     alert('Вы киноман');
// } else {
//     alert('Произошла ошибка');
// }


for (let i = 0; i < 2; i++) {
    const question = prompt('Один из последних просмотренных фильмов?', ''),
          answer = prompt('На сколько оцените его?', '');

    if (question != null && answer != null && question != '' && answer != '' && question.length < 50 ) {
        personalMovieDB.movies[question] = answer;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

}



console.log(personalMovieDB);
