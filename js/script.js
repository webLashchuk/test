/* eslint-disable linebreak-style */
'use strict';

// for (let i =5; i <= 10; i++) {
// 	console.log(i);
// }

// for (let i = 20; i <= 20; i--) {
// 	if (i === 13) break;
// 	console.log(i);
// }

// for (let i = 2; i <= 10; i++) {
// 	if(i % 2) {
// 		continue;
// 	}
// 	console.log(i);
// }

// for (let i = 2; i <= 16; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }
// let i = 2;

// do {
// 	i++;
// 	if (i % 2) {
// 		console.log(i);
// 	} 
// } while (i < 16);

// for (let i = 2; i <= 16; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }

// function fifthTask() {
// 	let arrayOfNumbers = [];

// 	// Пишем решение вот тут
// 	for (let i = 5; i <= 10; i++) {
// 		arrayOfNumbers[i - 5] = i;
// 	}
// 	console.log(arrayOfNumbers);
// 	// Не трогаем
// 	return arrayOfNumbers;
// }

// fifthTask();

// function firstTask() {
// 	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// 	const arr = [3, 5, 8, 16, 20, 23, 50];
// 	let result = [];

// 	// Пишем решение вот тут
// 	for (let i = 0; i < arr.length; i++) {
// 		result[i] = arr[i];
// 	}
// 	console.log(result);
// 	// Не трогаем
// 	return result;
// }

// firstTask();

// function secondTask() {
// 	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// 	const data = [5, 10, 'Shopping', 20, 'Homework'];

// 	// Пишем решение вот тут
// 	for (let i = 0; i < data.length; i++) {
// 		if (typeof (data[i]) === 'string') {
// 			data[i] = `${data[i]} - donne`;
// 		} else if (typeof (data[i]) === 'number'){
// 			data[i] = data[i] * 2;
// 		}
// 	}
// 	console.log(data);
// 	// Не трогаем
// 	return data;
// }

// secondTask();


// Место для третьей задачи
// function thirdTask() {
// 	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// 	const data = [5, 10, 'Shopping', 20, 'Homework'];
// 	const result = [];

// 	// Пишем решение вот тут
// 	for (let i = 0; i < data.length; i++) {
// 		result[i - 1] = data[data.length - i];
// 	}
// 	console.log(result);
    
// 	// Не трогаем
// 	return result;
// }

// thirdTask();

// function thirdTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     console.log(result);
//     return result;
// }

// thirdTask();

// console.log(result);

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания

for (let i = 0; i < 1; i++) {

	const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	
	if (numberOfFilms != '' && typeof(numberOfFilms) != 'string') {
		const personalMovieDB = {
			count: numberOfFilms,
			movies: {
				'logan': '8.1',
			},
			actors: {},
			genres: [],
			privat: false
		};
		if (personalMovieDB.count < 10) {
			alert('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			alert('Вы классический зритель');
		} else if (personalMovieDB.count >= 30) {
			alert('Вы киноман');
		} 

		
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов?', ''),
				b = prompt('На сколько оцените его?', ''); 
			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log('Done');
			}  else {
				console.log('Ошибка! Вы не ввели данные!');
				i--;
			}
		} 
		console.log(personalMovieDB);
	} else {
		alert('Произошла ошибка');	
		i--;
	}
}
	
	


// const a = prompt('Один из последних просмотренных фильмов?', ''),
// 	b = prompt('На сколько оцените его?', ''),
// 	c = prompt('Один из последних просмотренных фильмов?', ''),
// 	d = prompt('На сколько оцените его?', '');







