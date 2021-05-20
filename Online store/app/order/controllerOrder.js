import ModelOrder from './modelOrder.js';
import ViewOrder from './viewOrder.js';

export default class ControllerOrder {
	constructor(publisher) {
		this.model = new ModelOrder();
		this.view = new ViewOrder(this.onClickSendInfoToOwner);

		this.load();

		publisher.subscribe('SHOW_ORDER_WINDOW', this.handleShowOrderWindow);
	}

	load() {
		this.view.render();
	}

	handleShowOrderWindow = data => {
		this.model.orderedCount = data;
		this.view.renderOrder();
	}

	onClickSendInfoToOwner = (evt) => {
		evt.preventDefault();
		const buyerData = this.view.getBuyerData();
		const infoToSend = this.model.getInfoToSendOwner(buyerData);

		this.model.sendOrderInfoToOwner(infoToSend);
	}
}
