/* eslint-disable linebreak-style */
'use strict';

function fib(num) {
	if (typeof(num) != 'number' || num <= 0) {
		return console.log('');
	} else {
		let result = '';
		let fibPrev = 0;
		let fibCurrent = 1;

		for (let i = 0; i < num; i++) {
			if (i + 1 === num) {
				result += `${fibPrev}`;
			} else {
				result += `${fibPrev} `;
			}
			let fibNext = fibPrev + fibCurrent;
			fibPrev = fibCurrent;
			fibCurrent = fibNext;
		}
		return console.log(result);
	}
}

fib(35);
