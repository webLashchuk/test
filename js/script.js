/* eslint-disable linebreak-style */
'use strict';

const shoppingMallData = {
	shops: [
		{
			width: 10,
			length: 5
		},
		{
			width: 15,
			length: 7
		},
		{
			width: 20,
			length: 5
		},
		{
			width: 8,
			length: 10
		}
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 50000
};

function isBudgetEnough(data) {
	let totalBudget = 0;
	data.shops.forEach(function(item) {
		totalBudget  += item.width * item.length;
	});
	totalBudget = totalBudget * data.height * data.moneyPer1m3;
	if (totalBudget <= data.budget) {
		console.log('Бюджета достаточно');
	} else if (totalBudget > data.budget) {
		console.log('Бюджета недостаточно');
	} else {
		console.log('Бюджета достаточно');
	}
}

isBudgetEnough(shoppingMallData);