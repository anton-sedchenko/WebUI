import ViewFilter from './viewFilter.js';
import ModelFilter from './modelFilter.js';

export default class ControllerFilter {
	constructor(publisher) {
		this.view = new ViewFilter(this.onClickFilterCategories);
		this.model = new ModelFilter();

		this.publisher = publisher;
		this.publisher.subscribe('GET_CATEGORIES', this.handleFilterLoad);
	}

	handleFilterLoad = ({ categories, data }) => {
		this.view.render(categories);
		this.model.data = data;
	}

	onClickFilterCategories = () => {
		const filterInput = this.view.domCategoryFilter.value;
		const initialInputValue = 'Filter by category';
		let filteredData = [];

		if (filterInput !== initialInputValue) {
			filteredData = this.model.getFilteredDataByCategory(filterInput);
		}

		this.publisher.notify('GET_DATA_BY_CATEGORIES', filteredData);
	};
}
