import Model from './model.js';
import View from './view.js';

export default class Controller {
	constructor() {
		this.model = new Model(this.handleLoadData.bind(this));
		this.view = new View(this.handleClickSearch.bind(this));
	}

	handleClickSearch(evt) {
		const city = this.view.getCity(evt);

		this.view.clearInfoContainer();
		this.model.load(city);
	}

	handleLoadData(data) {
		this.view.renderWeatherInfo(data);
	}
}
