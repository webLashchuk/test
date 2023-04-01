/* eslint-disable linebreak-style */
'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();
	}
}

start();

	
const personalMovieDB = {
	count: numberOfFilms,
	movies: {
		'logan': '8.1',
	},
	actors: {},
	genres: [],
	privat: false
};

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		alert('Вы классический зритель');
	} else if (personalMovieDB.count >= 30) {
		alert('Вы киноман');
	} 
}

// detectPersonalLevel();

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
			b = prompt('На сколько оцените его?', '').trim(); 
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('Done');
		}  else {
			console.log('Ошибка! Вы не ввели данные!');
			i--;
		}
	} 
}

// rememberMyFilms();

let showMyDB = (hidden) => {
	if (!hidden)
		return console.log(personalMovieDB);
};

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		// while (c == '' || c == null || c.length > 50 || undefined) {
		// 	personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`, '');
		// }
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`, '').trim();
	}
}

writeYourGenres();
