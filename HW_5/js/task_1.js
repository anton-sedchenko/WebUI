'use strict';
// Quipu Calculator
// The Quipu is the numbering system of the ancient Incas. A number is represented by knots in a string, using a positional representation (in base-10).
// The representation of 123: one knot + space + two knots + space + three knots
// Zeros are represented using a blank space. (leading zeros are not allowed)
// @ is a knot and ~ is a space.

// 123 => @~@@~@@@

// 20 => @@~~

// Create a method that calculates mathematical expressions in quipu format.
// Input
// A string representing a mathematical expression with operands in the quipu format above, separated by the plus [+] or minus [-] or division [/] or multiplication [*] sign.

// @~@ => 11

// @~~@ => 101

// @~~~@ => 1001


// Output
// A string representing the result of the mathematical expression in quipu format.
// Example:
// calculate("@~@@*@@")
// => "@@~@@@@"
// calculate("@~@@+@@~~")
// => "@@@~@@"



function quipuCalc(str) {
	const expression = str;
	const regexp = /@+~+?@|@+/g;
	const mathSign = /\*|\/|\+|-/g;

	let arithmeticSigns = [...expression.matchAll(mathSign)];
	let allElementsArr = [...expression.matchAll(regexp)];
	
	let translatedElemsArr = allElementsArr.map(item => {
		const manyPieceElem = /(@+)(~+)?/;
		const currElem = item[0];

		
		
		// if (currElem.length === currElem.match(onePieceElem)[0].length) {
		// 	return currElem.length;	
		// } else {

		// }
	});
	// "@@@~@@" // 32
	// "@@@~ ~~~ @@" // 30002

	// function zeroTranslator(str) {
		// fill with 0 from position 2 until position 4
		// array1.fill(0, 2, 4));
	// }
}
// quipuCalc("@@~@*@@@/@@@@+@@-@@");
// @ - 1, @@ - 2, @@@ - 3, @@@@ - 4, @@@@@ - 5, @@@@@@ - 6, @@@@@@@ - 7, @@@@@@@@ - 8, @@@@@@@@@ - 9
// @~@ - 11, @~@@ - 12, @~@@@ - 13, @~@@@@ - 14, @~@@@@@ - 15
// @@~~ - 20, @@~@ - 21, @@~@@ - 22
// const delimiter = "abcd+wxyz-ghi";
// const separators = [' ', '\\\+', '-', '\\\(', '\\\)',
// '\\*', '/', ':', '\\\?'];
// console.log(separators.join('|'));

// const result = delimiter.split(new RegExp(separators.join('|'), 'g'));

