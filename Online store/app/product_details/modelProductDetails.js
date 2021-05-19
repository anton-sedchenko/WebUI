export default class ModelProductDetails {
	#productInDetailsWindow = {};

	constructor() {

	}

	get productInDetailsWindow() {
		return JSON.parse(JSON.stringify(this.#productInDetailsWindow));
	}

	set productInDetailsWindow(product) {
		this.#productInDetailsWindow = product;
	}
}
