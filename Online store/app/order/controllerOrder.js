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
		console.log('recieved data');
		console.log(data);
		this.model.orderedCount = data;
		this.view.renderOrder();
	}

	onClickSendInfoToOwner = (evt) => {
		evt.preventDefault();

		const buyerData = this.view.getBuyerData();
		const infoToSent = this.model.getInfoToSentOwner(buyerData);

		// вызвать метод отправки хозяину
		this.model.sendOrderInfoToOwner();

		// вызвать метод сохранения в ЛС в историю
		// 
		
	}
}