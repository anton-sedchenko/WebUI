'use strict';

function isTicketLucky(num) {
	if (num <= 0 || num > 1000000) {

		return 'Invalid value. Enter the number from 100\'000 to 999\'999.'
	}

	if (num <= 100000) {

		return 'NO'
	}

	const numString = num.toString();
	let numLeftPart = numString.slice(0, numString.length / 2);
	let numRightPart = numString.slice(numString.length / 2);

	numLeftPart = [...numLeftPart];
	numRightPart = [...numRightPart];

	const leftPartNumsSum = numLeftPart.reduce((sum, current) => {
		
		return sum + Number(current);
	}, 0);

	const rightPartNumsSum = numRightPart.reduce((sum, current) => {
		
		return sum + Number(current);
	}, 0);

	return leftPartNumsSum === rightPartNumsSum ? 'YES' : 'NO';
}
