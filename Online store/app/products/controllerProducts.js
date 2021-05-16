import ModelProducts from './modelProducts.js';
import ViewProducts from './viewProducts.js';

export default class ControllerProducts {
	constructor(Publisher) {
		this.model = new ModelProducts();
		this.view = new ViewProducts(this.onClickAddToCart);

		this.load();
		this.publisher = Publisher;
	}

	load() {
		this.model.load()
			.then(d => this.view.render(d));
	}

	onClickAddToCart = (evt) => {
		const id = evt.target.dataset.id;
		const product = this.model.getProductById(id);

		this.publisher.notify('ADD_TO_CART', product);
	}
}