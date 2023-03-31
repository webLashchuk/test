/* eslint-disable linebreak-style */
'use strict';

// function getTimeFromMinutes(minutesTotal) { 
// 	if (typeof(minutesTotal) !== 'number' || !Number.isInteger(minutesTotal) || minutesTotal < 0) {
// 		return console.log('Ошибка, проверьте данные');
// 	} 
// 	const hours = Math.floor(minutesTotal / 60);
// 	const minutes = minutesTotal % 60;

// 	let hoursStr = '';

// 	switch (hours) {
// 	case 0:
// 		hoursStr = 'часов';
// 			  break;
// 	case 1:
// 		hoursStr = 'час';
// 			  break;
// 	case 2:
// 	case 3:
// 	case 4:
// 		hoursStr = 'часа';
// 			  break;
// 	default:
// 		hoursStr = 'часов';
// 		  }

// 	return console.log(`Это ${hours} ${hoursStr} и ${minutes} минут`);
// }

// getTimeFromMinutes(450);

function findMaxNumber(firstVal, secondVal, thirdVal, fourVal) {
	if (typeof(firstVal) !='number' || typeof(secondVal) !='number' || typeof(thirdVal) !='number' || typeof(fourVal) !='number') {
		return console.log (0);
	} else {
		let result = 0;
		if (firstVal > secondVal && firstVal > thirdVal && firstVal > fourVal) {
			result = firstVal;
		} else if (secondVal > firstVal && secondVal > thirdVal && secondVal > fourVal) {
			result = secondVal;
		} else if (thirdVal > firstVal && thirdVal > secondVal && thirdVal > fourVal) {
			result = thirdVal;
		} else {
			result = fourVal;
		}
		return console.log(result);
	}
}

// findMaxNumber(1, 5, 6.6, 11);


// function findMaxNumber(a, b ,c, d) {
//     // Самое простое - это использовать Math.max :)
//     // А оптимизировать такую проверку мы научимся совсем скоро
//     if (typeof(a) !== 'number' ||
//         typeof(b) !== 'number' ||
//         typeof(c) !== 'number' ||
//         typeof(d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b ,c, d);
//     }
// }

// findMaxNumber(1, 5, 6.6, 11);
	
	