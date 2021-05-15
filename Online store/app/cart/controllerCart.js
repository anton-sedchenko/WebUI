import ModelCart from './modelCart.js';
import ViewCart from './viewCart.js';

export default class ControllerCart {
	constructor() {
		this.model = new ModelCart();
		this.view = new ViewCart();

		this.load();
	}

	load() {
		const cart = this.model.loadFromLS();

		this.view.render(cart);
	}
}
