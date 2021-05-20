// Форма с данными: Имя, почта, номер телефона (+валидация этих полей)

export default class ViewOrder {
	#buyerInfo = {};

	constructor(onClickSendInfoToOwner) {
		this.domOrderWindow = document.querySelector('.order__modal-window');
		this.domOrderContainer = document.querySelector('.order__info-container');
		this.domBody = document.querySelector('body');
		this.domOrderWindow.addEventListener('click', this.onClickCloseOrder);
		this.onClickSendInfoToOwner = onClickSendInfoToOwner;
	}

	get buyerInfo() {
		return this.#buyerInfo;
	}

	set buyerInfo(data) {
		this.#buyerInfo = data;
	}

	renderOrder = () => {
		this.domOrderWindow.classList.toggle('close');

		if (!this.domOrderWindow.classList.contains('close')) {
			this.domBody.style.overflow = 'hidden';
		}
	}

	onClickCloseOrder = (evt) => {
		const domMakeOrderBtn = document.querySelector('.submit-order-btn');

		if (evt.target === this.domOrderWindow || evt.target === domMakeOrderBtn) {
			this.domOrderWindow.classList.toggle('close');
			this.domBody.style.overflow = 'auto';
		}
	}

	getBuyerData() {
		this.buyerInfo.buyerPhone = document.querySelector('.order__buyer-phone').value;
		this.buyerInfo.buyerCity = document.querySelector('.order__buyer-city').value;
		this.buyerInfo.buyerStreet = document.querySelector('.order__buyer-street').value;
		this.buyerInfo.buyerBuild = document.querySelector('.order__buyer-build').value;
		this.buyerInfo.buyerApp = document.querySelector('.order__buyer-app').value;
		this.buyerInfo.buyerName = document.querySelector('.order__buyer-name').value;
		this.buyerInfo.buyerEmail = document.querySelector('.order__buyer-email').value;

		return this.buyerInfo;
	}


	render() {
		this.domOrderContainer.innerHTML = this.renderDom();
		const submitOrderBtn = document.querySelector('.submit-order-btn');

		submitOrderBtn.addEventListener('click', this.onClickSendInfoToOwner);
	}

	renderDom() {
		return `<div class="order__info-container">
			<form action="">
                <h2>Contact number *</h2>
                <input class="order__buyer-phone" type="tel">
                <h2>City *</h2>
                <input class="order__buyer-city" type="text">
                <h2>Delivery address</h2>
                <input class="order__buyer-street" type="text" placeholder="Street">
                <input class="order__buyer-build" type="text" placeholder="Build.">
                <input class="order__buyer-app" type="text" placeholder="App.">
                <h2>Buyer</h2>
                <input class="order__buyer-name" type="text" placeholder="First Name and Last Name*">
                <input class="order__buyer-email mb-3" class="mb-3" type="email" placeholder="E-mail">
                <div class="d-flex">
                    <button class="btn submit-order-btn" type="submit">Submit purchase</button>
                </div>
            </form>
        </div>`
	}
}
