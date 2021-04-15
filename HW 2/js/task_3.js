'use strict';

function shortestWord(string) {
	const wordsArr = string.split(' ');
	const minWordLength = wordsArr.reduce((minLength, currentWord,i, arr) => {
		if (minLength > currentWord.length) {
			minLength = currentWord.length;
		}

		return minLength;
	}, wordsArr[0].length);

	return minWordLength;
}
