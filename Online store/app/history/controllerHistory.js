import ModelHistory from './modelHistory.js';
import ViewHistory from './viewHistory.js';

export default class ControllerHistory {
	constructor(publisher) {
		this.model = new ModelHistory();
		this.view = new ViewHistory(this.handleOrdersHistoryClick);

		this.load();
	}

	load() {
		let history = this.model.loadFromLS();

		this.view.renderHistory(history);
	}

	handleOrdersHistoryClick = () => {
		const history = this.model.getHistoryData();

		this.view.showHistoryWindow();
		this.view.renderHistory(history);
	}
}
