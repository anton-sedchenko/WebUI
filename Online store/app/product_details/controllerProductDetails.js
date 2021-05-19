import ModelProductDetails from './modelProductDetails.js';
import ViewProductDetails from './viewProductDetails.js';

export default class ControllerProductDetails {
	constructor(publisher) {
		this.model = new ModelProductDetails();
		this.view = new ViewProductDetails();
		this.publisher = publisher;

		this.load();
		publisher.subscribe('SHOW_PRODUCT_DETAILS_WINDOW', 
			this.handleRenderProductDetails);
	}

	load() {
		this.view.renderProductDetails();
	}

	handleRenderProductDetails = data => {
		const productDomStructure = this.view.renderProductDetails(data);

		this.model.productInDetailsWindow = data;
		this.view.showProductDetailsWindow();
		this.view.render(productDomStructure);
		this.publisher.notify('ADD_TO_CART', this.model.productInDetailsWindow);
	}
}
