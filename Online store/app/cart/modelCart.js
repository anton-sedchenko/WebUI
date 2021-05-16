export default class ModelCart {
	#cart = [];

	loadFromLS() {
		this.#cart = JSON.parse(localStorage.getItem('cart') || '[]');
		
		return this.cart;
	}

	get cart() {
		return JSON.parse(JSON.stringify(this.#cart));
	}

	addProducts(data) {
		if (!this.#cart.find(({ ID }) => ID === data.ID)) {
			
			this.#cart.push(data);
			localStorage.setItem('cart', JSON.stringify(this.cart));
		}

		return this.cart;
	}

	removeProductFromLS(id) {
		this.#cart = this.#cart.filter(({ ID }) => ID !== id);
		localStorage.setItem('cart', JSON.stringify(this.cart));

		return this.cart;
	}
}
