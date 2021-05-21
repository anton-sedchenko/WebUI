export default class ModelHistory {
	#history = [];

	loadFromLS() {
		this.#history = JSON.parse(localStorage.getItem('history') || '[]');

		return this.history;
	}

	get history() {
		return JSON.parse(JSON.stringify(this.#history));
	}

	getHistoryData(data) {
		return JSON.parse(localStorage.getItem('history' || '[]'));
	}
}
