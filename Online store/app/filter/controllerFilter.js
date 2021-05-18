import ViewFilter from './viewFilter.js';
import ModelFilter from './ModelFilter.js';

export default class ControllerFilter {
	constructor(publisher) {
		this.view = new ViewFilter();
		this.model = new ModelFilter();

		publisher.subscribe('GET_CATEGORIES', this.handleFilterLoad);
	}

	handleFilterLoad = ({ categories, data }) => {
		console.log(categories);

		this.view.render(categories);
		this.model.data = data;
	}

	filterCheapFirst() {
		return this.model.data.sort(this.sortItemsASC);
	}

	filterExpensiveFirst() {
		return this.model.data.sort(this.sortItemsDESC);
	}

	sortItemsASC = (a, b) => a.PRICE - b.PRICE;

	sortItemsDESC = (a, b) => b.PRICE - a.PRICE;

	handleCategoriesFilter() {
// при нажатии на кнопку сабмит доставать выбраный опшин, фильтровать по нему и передавать в продактс для рендера.
	};

}
