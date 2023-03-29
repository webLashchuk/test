/* eslint-disable linebreak-style */
'use strict';
// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
// 	return curr * amount;
// }

// function promotion (result) {
// 	console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);

// function test() {
// 	for (let i = 0; i < 5; i++) {
// 		console.log(i);
// 		if (i === 3) return;
// 	}
// 	console.log('Done');
// }

// test();

// function doNothing() {}
// console.log(doNothing() === undefined);

// function sayHello(name) {
// 	return `Привет, ${name}!`;
// }

// sayHello('Привет, ', 'Антон!');

// function returnNeighboringNumbers(value) {
// 	const arr = [];
// 	for (let i = 0; i < 3; i++) {
// 		arr[i] = (value - 1) + i;
// 	}
// 	return console.log(arr) ;
// }

// returnNeighboringNumbers(12);


function getMathResult(base, factor) {
	let result = '';
	if (typeof(factor) != 'number' || factor <= 0){
		result = base;
	} else {
		for (let i = 1; i < factor; i++) {
			result += `${base + (i * base) - base}---`;
		}
		result = `${result}${base * factor}`;
	}
	

	return console.log(result);
}

getMathResult(10, 7);

// returnNeighboringNumbers(5);

// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// }

// getMathResult(10, 5);
