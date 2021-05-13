import ModelProducts from './modelProducts.js';
import ViewProducts from './viewProducts.js';

export default class ControllerProducts {
	constructor() {
		this.model = new ModelProducts();
		this.view = new ViewProducts();

		this.load();
	}

	load() {
		this.model.load()
			.then(d => this.view.render(d));
	}
}