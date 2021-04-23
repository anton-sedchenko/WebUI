'use strict';

class Dictionary {
	constructor() {
		this.dictionary = {}
	}

	newEntry(word, descr) {
		this.dictionary[word] = descr;
	}

	look(word) {
		if (this.dictionary[word]) {
			return this.dictionary[word];
		}
		return `Can't find entry for ${word}`;
	}
}
