/* eslint-disable linebreak-style */
'use strict';

// const hamburger = 5;
// const fries = 0;

// if(hamburger && fries) {
// 	console.log('Я сыт!');
// } else console.log('Я не сыт!');

// console.log((hamburger && fries));

// const hamburger = 2;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'review');

// if(hamburger === 3 && cola === 1 && fries) {
// 	console.log('Все сыты!');
// } else {
// 	console.log('Мы уходим');
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets =2;

// if(hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
// 	console.log('Все довольны!');
// } else {
// 	console.log('Мы уходим');
// }

// console.log(hamburger || cola || fries);

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);

console.log(NaN || 2 || undefined);

console.log(NaN && 2 && undefined);

console.log(1 && 2 && 3);

console.log(!1 && 2 || !3);

console.log(NaN || null || !3 || undefined || 5);

console.log(NaN || null && !3 && undefined || 5);

console.log(5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets =2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
// 	console.log('Done!');
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
// 	console.log('Done!');
// }

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
	console.log('Done!');
} else {
	console.log('Not');
}
