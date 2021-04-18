'use strict';

function findBestCost(a1, a2, a3, b1, b2, b3) {
	const argumentsArray = [...arguments];
	const invalidValueCheck = argumentsArray.some((item) => {

		return item < 1 || item > 100;
	});

	if (invalidValueCheck) {

		return 'Invalid value. Enter value from 1 to 100.';
	}

	const typesCostArray = [a1, a2, a3];
	const capacitiesArray = [b1, b2, b3];

	typesCostArray.sort((a, b) => b - a);
	capacitiesArray.sort((a, b) => b - a);

	const eachCapacitiesCost = typesCostArray.map((item, i) => item * capacitiesArray[i]);

	return eachCapacitiesCost.reduce((sum, current) => sum + current);
}
