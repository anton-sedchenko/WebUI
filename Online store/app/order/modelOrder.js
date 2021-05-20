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

	getInfoToSendOwner(buyerData) {
		const newStr = '%0A';
		const strDivider = '------------------------------';
		this.orderedProducts = JSON.parse(localStorage.getItem('cart'));
		const infoAboutBuyer = [];
		let infoToSend = '';
		let buyerInfo = '';
		let productsCountinfo = '';
		let productsInfo = '';

		infoAboutBuyer.push('*Phone:* ' + buyerData.buyerPhone);
		infoAboutBuyer.push('*City:* ' + buyerData.buyerCity);
		infoAboutBuyer.push('*Street:* ' + buyerData.buyerStreet);
		infoAboutBuyer.push('*Build:* ' + buyerData.buyerBuild);
		infoAboutBuyer.push('*App:* ' + buyerData.buyerApp);
		infoAboutBuyer.push('*Name:* ' + buyerData.buyerName);
		infoAboutBuyer.push('*Email:* ' + buyerData.buyerEmail);

		const infoAboutBuyerArr = Object.entries(infoAboutBuyer);
		const productsCountArr = Object.entries(this.orderedCount);
		const orderedProductsArr = Object.entries(this.orderedProducts);

		infoAboutBuyerArr.forEach(([key, value]) => {
			buyerInfo += value + newStr;
		});

		productsCountinfo += `${ strDivider }${ newStr }*PRODUCTS COUNT:*${ newStr }${ strDivider }${ newStr }`;

		productsCountArr.forEach(([key, value], i, arr) => {
			if (i === arr.length - 1) {
				productsCountinfo += `*Total price:* ${ this.orderedCount[key] } UAH${ newStr }`;
				return;
			}
			productsCountinfo += `*Product id:* ${ key }${ newStr }`;
			productsCountinfo += `*Ordered count:* ${ value }${ newStr }`;
		});

		productsInfo += `${ strDivider }${newStr}*ORDERED PRODUCTS:*${ newStr }${ strDivider }${ newStr }`;

		orderedProductsArr.forEach(([key, value], i, arr) => {
			productsInfo += `*Product:* ${ value.PRODUCT_NAME } `;
			productsInfo += `*Id:* ${ value.ID } ${ newStr }`;
			productsInfo += `*Units:* ${ value.UNITS } `;
			productsInfo += `*Price:* ${ value.PRICE } ${ newStr }`;
		});

		return buyerInfo + productsCountinfo + productsInfo;
	}

	async sendOrderInfoToOwner(data) {
		const sendData = JSON.stringify(data);
		const chatId = '528157194';
		const token = '1839435046:AAGN4hhlyCcodmAkJJ-4ZDdNJ8fadmheW7w';
		const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${ chatId }&parse_mode=markdown&text=${ sendData }`;
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Ошибка по адресу ${ url }, статус ошибки ${ response }`);
		}

		alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');

		return await response.json();
	}
}
