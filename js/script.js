/* eslint-disable linebreak-style */
'use strict';

first: for (let i = 0; i < 3; i++) {
	console.log(`First level: ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`Second level: ${j}`);
		for (let k = 0; k < 3; k++) {
			if (k === 2) continue first;
			console.log(`Third level: ${k}`);
		}
	}
}

// let result = '';

// const length = 7;

// for (let i = 1; i < length; i++){

// 	for (let j = 0; j < i; j++){
// 		result += '*';
// 	}

// 	result += '\n';
// }

// console.log(result);