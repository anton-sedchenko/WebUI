'use strict';

function isTicketLucky(n) {
	const num = n;

	if (n < 100000 || n > 1000000) {

		return 'Invalid value. Enter the number from 100\'000 to 999\'999.'
	}

	let numberLeftPart = num.toString().slice(0, 3);
	let numberRightPart = num.toString().slice(3, 6);

	numberLeftPart = [...numberLeftPart];
	numberRightPart = [...numberRightPart];

	const leftPartNumsSum = numberLeftPart.reduce((sum, current) => Number(sum) + Number(current));
	const rightPartNumsSum = numberRightPart.reduce((sum, current) => Number(sum) + Number(current));

	if (leftPartNumsSum === rightPartNumsSum) {

		return 'YES';
	}

	return 'NO';
}
