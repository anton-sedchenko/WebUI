import ModelProducts from './modelProducts.js';
import ViewProducts from './viewProducts.js';

export default class ControllerProducts {
	constructor(Publisher) {
		this.model = new ModelProducts();
		this.view = new ViewProducts(this.viewListeners);

		this.load();
		this.publisher = Publisher;
		this.publisher.subscribe('GET_DATA_BY_CATEGORIES', 
			this.handleDataFilteredByCategories);
	}

	get viewListeners() {
		return {
			onClickAddToCart: this.onClickAddToCart, 
			onClickFilterCheapFirst: this.onClickFilterCheapFirst,
			onClickFilterExpensiveFirst: this.onClickFilterExpensiveFirst,
			onClickSearchByName: this.onClickSearchByName,
			onClickResetFilter: this.onClickResetFilter,
			onClickRenderProductDetails: this.onClickRenderProductDetails,
			onClickFilterDefault: this.onClickFilterDefault
		}
	}

	load() {
		this.model.load()
			.then(d => this.view.render(d))
			.then(() => this.filterLoad());
	}

	onClickAddToCart = (evt) => {
		const id = evt.target.dataset.id;
		const product = this.model.getProductById(id);

		this.publisher.notify('ADD_TO_CART', product);
	}

	onClickRenderProductDetails = (evt) => {
		const id = evt.target.dataset.id;
		const product = this.model.getProductById(id);

		this.publisher.notify('SHOW_PRODUCT_DETAILS_WINDOW', product);
	}

	filterLoad() {
		const passData = {};
		passData.categories = this.model.getAllCategories();
		passData.data = this.model.data;

		this.publisher.notify('GET_CATEGORIES', passData);
	}

	handleDataFilteredByCategories = (filteredData) => {
		this.model.currentPageData = filteredData;
		this.view.render(filteredData);
	}

	onClickFilterCheapFirst = () => {
		const currentPageData = this.model.currentPageData;
		const sortedData = this.model.filterCheapFirst(currentPageData);

		this.view.render(sortedData);
	}

	onClickFilterExpensiveFirst = () => {
		const currentPageData = this.model.currentPageData;
		const sortedData = this.model.filterExpensiveFirst(currentPageData);

		this.view.render(sortedData);
	}

	onClickFilterDefault = () => {
		const currentPageData = this.model.currentPageData;

		this.view.render(currentPageData);
	}

	onClickSearchByName = () => {
		const searchRequest = this.view.getSearchValue();
		const filteredData = this.model.filterDataByName(searchRequest);

		this.view.render(filteredData);
	}

	onClickResetFilter = () => {
		this.view.render(this.model.data);
	}
}
