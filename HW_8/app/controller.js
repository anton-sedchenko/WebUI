import Model from './model.js';
import View from './view.js';

export default class Controller {
	constructor() {
		this.model = new Model(this.handleLoadData.bind(this));
		this.view = new View(this.handleClickSearch.bind(this));
	}

	handleClickSearch(evt) {
		evt.preventDefault();
		const city = this.model.getCity();

		this.view.clearInfocontainer();
		this.model.load(city);
	}

	handleLoadData(data) {
		this.view.renderWeatherInfo(data);
	}
}
