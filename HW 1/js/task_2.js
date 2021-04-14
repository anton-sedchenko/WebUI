'use strict';

function findBestCost(a1, a2, a3, b1, b2, b3) {
	const argumentsArray = [...arguments];
	const invalidValueCheck = argumentsArray.some((item) => {

		return item < 1 || item > 100;
	});

	if (invalidValueCheck) {

		return 'Invalid value. Enter value from 1 to 100.'
	}

	const [typeCost_1, typeCost_2, typeCost_3, ...capacitiesArray] = arguments;
	const typesCostArray = [];

	typesCostArray.push(typeCost_1);
	typesCostArray.push(typeCost_2);
	typesCostArray.push(typeCost_3);

	typesCostArray.sort((a, b) => b - a);
	capacitiesArray.sort((a, b) => b - a);

	const eachCapacitiesCost = typesCostArray.map((item, i) => item * capacitiesArray[i]);

	return eachCapacitiesCost.reduce((sum, current) => sum + current);
}
