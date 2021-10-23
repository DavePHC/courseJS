'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const firstQuestion = prompt('Один из последних просмотренных фильмов?'),
      firstAnswer = prompt('На сколько оцените его?'),
      secondQuestion = prompt('Один из последних просмотренных фильмов?'),
      secondAnswer = prompt('На сколько оцените его?');

personalMovieDB.movies[firstQuestion] = firstAnswer;
personalMovieDB.movies[secondQuestion] = secondAnswer;

console.log(personalMovieDB);