export default class ModelCart {
	#cart = [];

	constructor() {

	}

	loadFromLS() {
		localStorage.setItem('cart', '[{"ID": "45002250", "PRODUCT_NAME": "MILK", "IMG_LINK": "https://www.stonyfield.com/wp-content/uploads/2017/02/stonyfield-organic-milk-halfgallon-wholemilk-500x500.png", "MANUFACTURE": "Borden Dairy Company", "CATEGORY": "Beverages", "INGRIDIENTS": "MILK, HIGH FRUCTOSE CORN SYRUP, SUGAR, NONFAT DRY MILK, CORN STARCH, COCOA, COCOA (PROCESSED WITH ALKALI), SALT, CARRAGEENAN, NATURAL AND ARTIFICIAL FLAVOR, VITAMIN D3", "MANUFACTURE": "Borden Dairy Company", "PRICE": "33", "PRODUCT_NAME": "MILK", "UNITS": "1,6 L"}]');
		this.#cart = JSON.parse(localStorage.getItem('cart'));

		return this.cart;
	}

	get cart() {
		return JSON.parse(JSON.stringify(this.#cart));
	}
}
