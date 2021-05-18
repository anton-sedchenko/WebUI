import ModelProductDetails from './modelProductDetails.js';
import ViewProductDetails from './viewProductDetails.js';

export default class ControllerProductDetails {
	constructor(publisher) {
		this.model = new ModelProductDetails();
		this.view = new ViewProductDetails();

		this.load();

		// publisher.subscribe('ADD_TO_CART', this.handleAddToCart);
	}

	load() {
		// let cart = this.model.loadFromLS();
		
		// this.view.render(cart);
	}

	// handleAddToCart = data => {
	// 	const newProduct = this.model.addProducts(data);

	// 	this.view.render(newProduct);
	// }

	// handleRemoveFromCart = evt => {
	// 	if (evt.target.classList.contains('cart__item-delete-btn-cross')) {
	// 		const id = evt.target.dataset.id;
	// 		const newCart = this.model.removeProductFromLS(id);

	// 		this.view.render(newCart);
	// 	}
	// }
}
