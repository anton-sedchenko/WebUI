'use strict';

function twoOldestAges(arg) {
	let arr = arg.concat().sort((a, b) => b - a);

	return arr.splice(0, 2).reverse();
}
