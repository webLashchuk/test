/* eslint-disable linebreak-style */
'use strict';

// let a = 5,
// 	b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
// 	a: 5,
// 	b: 1
// };

// const copy = obj; //ссылку

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
// 	let objCopy = {};

// 	let key;
// 	for(key in mainObj) {
// 		objCopy[key] = mainObj[key];
// 	}

// 	return objCopy;
// }

// const numbers = {
// 	a: 2,
// 	b: 5,
// 	c: {
// 		x: 7,
// 		y:4
// 	}
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
// 	d: 17,
// 	e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'adadadasas';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
// 	blogs = ['wordpress', 'livejournal', 'blogger'],
// 	internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const newAarray = [...array];

// const q = {
// 	one: 1,
// 	two: 2
// };

// const newObj = {...q};

const personalPlanPeter = {
	name: 'Peter',
	age: '29',
	skills: {
		languages: ['ru', 'eng'],
		programmingLangs: {
			js: '20%',
			php: '10%'
		},
		exp: '1 month'
	},
	showAgeAndLangs: function(plan) {
		let landStr = '';
		const age = plan.age;
		let lang = plan.skills.languages;
		lang.forEach(function(item) {
			landStr += ` ${item.toUpperCase()}`;
		});
		return console.log(`Мне ${age} и я владею языками:${landStr}`);
	}
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
	const exp = plan.skills.exp; //деструктуризация;
	return console.log(exp);
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
	const {programmingLangs} = plan.skills; //фигурные скобки это важно;
	let str = '';

	for (let key in programmingLangs) {
		str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
	} 
	return console.log(str);
}

showProgrammingLangs(personalPlanPeter);