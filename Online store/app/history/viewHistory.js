export default class ViewHistory {
	constructor(handleOrdersHistoryClick) {
		this.domOrdersHistoryBtn = document.querySelector('.header__orders-history');
		this.domHistoryWindow = document.querySelector('.history__modal-window');
		this.domHistoryContainer = document.querySelector('.history__info-container');
		this.closeHistoryBtn = document.querySelector('.close-btn');
		this.domBody = document.querySelector('body');
		this.handleOrdersHistoryClick = handleOrdersHistoryClick;
		this.domOrdersHistoryBtn.addEventListener('click', this.handleOrdersHistoryClick);
		this.domHistoryWindow.addEventListener('click', this.onClickCloseHistory);
	}

	showHistoryWindow() {
		this.domHistoryWindow.classList.toggle('close');

		if (!this.domHistoryWindow.classList.contains('close')) {
			this.domBody.style.overflow = 'hidden';
		}
	}

	onClickCloseHistory = (evt) => {
		if (evt.target === this.closeHistoryBtn || evt.target === this.domHistoryWindow) {
			this.domHistoryWindow.classList.toggle('close');
			this.domBody.style.overflow = 'auto';
		}
	}

	renderHistoryData(data) {
		const productHistory = data;

		if (!productHistory) {
			this.domHistoryContainer.innerHTML = this.renderEmptyHistory();
			return;
		}
		
		const orderedProductsNamesArr = data.map(item => item.orderedProducts);
		const productsNames = orderedProductsNamesArr.map(item => {
			let productNames = '';
			let productsObj = item;

			productsObj.forEach(product => productNames += product.PRODUCT_NAME + ', ');
			return productNames;
		});

		this.domHistoryContainer.innerHTML = productHistory.map((el, i) => {
			return this.renderDom(el, i, productsNames);
		}).join('');
	}

	renderDom({ orderNumber, buyerName, buyerPhone, totalSum}, i, productsNames) {
		const orderedProducts = productsNames[i];

		return `<div>
			<p>Order number: <span>${ orderNumber }</span></p>
			<p>Buyer name: <span>${ buyerName }</span></p>
			<p>Buyer tel: <span>${ buyerPhone }</span></p>
			<p>Ordered products:</p>
			<p>${ orderedProducts }</p>
			<p>Total sum: <span>${ totalSum }</span> UAH</p>
			<p>-------------------------------</p>
		</div>`
	}

	renderEmptyHistory() {
		return `<p>History is empty</p>`;
	}
}
