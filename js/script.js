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

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
