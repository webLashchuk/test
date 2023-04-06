/* eslint-disable linebreak-style */
'use strict';
//ЗАДАЧА НА СОБЕСЕДОВАНИЕ
// const someString = 'This is some strange string';

// function reverse(str) {
// 	let stringArr = [];
// 	if(typeof(str) != 'string') {
// 		return console.log('Ошибка!');
// 	} else {
// 		for (let i = 0; i <= str.length -1; i++) {
// 			stringArr[i] = str[i];
// 		};
// 		console.log(stringArr.reverse().join(''));
// 	}
// }

// reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
	if(arr.length === 0) {
		return 'Нет доступных валют';
	} else {
		arr = baseCurrencies.concat(additionalCurrencies);
		let str = '';
		arr.forEach(function(item) {
		// console.log(item);
			if (item != missingCurr) 
		    str += `${item}\n`;
		});
		return `Доступные валюты:\n${str}`;
	}
}

availableCurr(arr, missingCurr);