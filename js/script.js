/* eslint-disable linebreak-style */
'use strict';

// function calculateVolumeAndArea(edge) {
// 	if (typeof(edge) === 'string' || edge <= 0 || edge % 1 != 0) {
// 		return 'При вычислении произошла ошибка';
// 	} else {
// 		const volume = edge * edge * edge;
// 		const surface = edge * edge * 6;
// 		return `Объем куба: ${volume}, площадь всей поверхности: ${surface}`;
// 	}
// }

// calculateVolumeAndArea(12.3);

function getCoupeNumber(place) {
	if (typeof(place) != 'number' || place < 0 || place % 1 != 0)  {
		return 'Ошибка. Проверьте правильность введенного номера места';
	} else if (place > 36 || place === 0) {
		return 'Таких мест в вагоне не существует';
	} else {
		return Math.ceil(place/4);
	}

}

getCoupeNumber(13);
            

	
	