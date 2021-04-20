'use strict';
 
function morseDecoder(str) {
	const morseCode = morseAlphabet;
	const messageWordsArr = str.split('   ');
	let result = [];

	function wordDecoder(word) {
		let wordCharsArr = word.split(' ');

		const decodedWordsArr = wordCharsArr.map(item => {
			for (let char in morseCode) {
				if (morseCode[char] === item) {
					return char.toUpperCase();
				}
			}

		});
		return decodedWordsArr.join('');
	}

	result = messageWordsArr.map(word => wordDecoder(word));
	return result.join(' ');
}
