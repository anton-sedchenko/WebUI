'use strict';

function sumMin(arr) {
	const minNumsArr = arr.map(innerArray => innerArray.reduce((min, current) => {
		if (current < min) {
			min = current;
		}

		return min;
	}));

	const result = minNumsArr.reduce((sum, current) => sum + current);

	return result;
}
