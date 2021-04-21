'use strict';

const quipuMathTable = {
	'1': '@',
	'2': '@@',
	'3': '@@@',
	'4': '@@@@',
	'5': '@@@@@',
	'6': '@@@@@@',
	'7': '@@@@@@@',
	'8': '@@@@@@@@',
	'9': '@@@@@@@@@'
}

function quipuCalc(str) {
	const mathSign = /\/|\*|\+|-/g;
	let result = [];
	let arithmeticSigns = [...str.matchAll(mathSign)];
	let allElementsArr = str.split(mathSign);
	const arrNoSigns = allElementsArr.map(num => quipuDecoder(num)).join(',');
	let decimalResult = arrNoSigns.replace(/,/g, () => arithmeticSigns.shift());
	decimalResult = eval(decimalResult);

	return quipuCoder(decimalResult);
}

function quipuDecoder(num) {
	const charsArr = num.match(/~+|@+/g);
	const decodedCharsArr = charsArr.map(item => {

		for (let key in quipuMathTable) {
			if (quipuMathTable[key] === item) {
				return key;
			}
		}

		return ''.padEnd(item.length - 1, '0');
	});
	return decodedCharsArr.join('');
}

function quipuCoder(num) {
	const splittedNum = num.toString().split('');
	const codedStr = splittedNum.map((item, i) => {

		for (let key in quipuMathTable) {
			if (key === item) {
				if (splittedNum.length > 1 && i !== splittedNum.length - 1) {
					return  quipuMathTable[key] + '~';	
				}
				return  quipuMathTable[key];
			}
		}

		return '~';
	});
	return codedStr.join('');
}
