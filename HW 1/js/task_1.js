'use strict';

function paintCounter(length, width, height) {
	if (length < 1 || length > 1000) {
		return 'Invalid length value. Enter value from 1 to 1000.'
	}

	if (width < 1 || width > 1000) {
		return 'Invalid width value. Enter value from 1 to 1000.'
	}

	if (height < 1 || height > 1000) {
		return 'Invalid height value. Enter value from 1 to 1000.'
	}

	const widthWallsSquare = width * height * 2;
	const lengthWallsSquare = length * height * 2;
	const generalSquare = lengthWallsSquare + widthWallsSquare;
	const oneCanStock = 16;

	return Math.floor(generalSquare / oneCanStock);
}
