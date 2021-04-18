'use strict';

function sortString(str) {
	if (!str.trim().length) {
		return '';
	}

	const arr = str.split(' ');
	let resultArr = [];
	const regExp = /\d+/g;

	arr.forEach(word => resultArr[word.match(regExp) - 1] = word);

	return resultArr;
}
