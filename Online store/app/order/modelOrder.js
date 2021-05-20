export default class ModelOrder {
	#orderedProducts = JSON.parse(localStorage.getItem('cart') || {});
	#orderedCount = {};

	set orderedProducts(data) {
		this.#orderedProducts = data;
	}

	get orderedProducts() {
		return JSON.parse(JSON.stringify(this.#orderedProducts));
	}

	get orderedCount() {
		return JSON.parse(JSON.stringify(this.#orderedCount));
	}

	set orderedCount(data) {
		this.#orderedCount = data;
	}

	getInfoToSentOwner(buyerData) {
		const dataToSend = {};
		this.orderedProducts = JSON.parse(localStorage.getItem('cart'));

		dataToSend.buyerInfo = buyerData;
		dataToSend.orderedCount = this.orderedCount;
		dataToSend.orderedProducts = this.orderedProducts;

		console.log(dataToSend);
	}

	async sendOrderInfoToOwner(data) {
		const sendData = JSON.stringify(data);
		const chatId = '528157194';
		const token = '1839435046:AAGN4hhlyCcodmAkJJ-4ZDdNJ8fadmheW7w';

		const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=markdown&text=${sendData}`;

		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Ошибка по адресу ${ url }, статус ошибки ${ response }`);
		}

		alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
		return await response.json();
	}
}
