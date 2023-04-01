/* eslint-disable linebreak-style */
'use strict';

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function() {
		console.log('test');
	}
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
// 	if (typeof(options[key]) === 'object') {
// 		for (let val in options[key]) {
// 			console.log(`Свойство ${val} имеет значение ${options[key][val]}`);
// 			// counter++;
// 		}
// 	} else {
// 		console.log(`Свойство ${key} имеет значение ${options[key]}`);
// 		counter++;
// 	}
// }
// console.log(counter);

// console.log(Object.keys(options).length);
