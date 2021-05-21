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

	validation = (evt) => {
		const nameField = document.querySelector('.order__buyer-name');
		const emailField = document.querySelector('.order__buyer-email');
		const telField = document.querySelector('.order__buyer-phone');
		const telFieldValue = document.querySelector('.order__buyer-phone').value;
		const nameFieldValue = document.querySelector('.order__buyer-name').value;
		const emailFieldValue = document.querySelector('.order__buyer-email').value;
		const telRegExp = new RegExp('\\+380\\d{9}');
		const emailRegExp = new RegExp('\\w+@\\w+\\.\\w+', 'i');
		const nameRegExp = /[?!.*?\/\().,@&#*!%:\d]/gi;
		const isemptyString = nameFieldValue.length === 0;
		const isTelValid = telRegExp.test(telFieldValue);
		const isNameValid = !nameRegExp.test(nameFieldValue);
		const isMailValid = emailRegExp.test(emailFieldValue);

		if (isemptyString || isNameValid) {
			nameField.style.borderColor = 'red';
		} else {
			nameField.style.borderColor = 'green';
		}
		isTelValid ? telField.style.borderColor = 'green' : telField.style.borderColor = 'red';
		isMailValid ? emailField.style.borderColor = 'green' : emailField.style.borderColor = 'red';

		if (isTelValid && isNameValid && isMailValid && !isemptyString) {
			this.submitOrderBtn.removeAttribute('disabled');
			this.submitOrderBtn.addEventListener('click', this.onClickSendInfoToOwner);
		} else {
			this.submitOrderBtn.setAttribute('disabled', 'disabled');
		}
	}

	disableSubmitBtn() {
		this.submitOrderBtn.setAttribute('disabled', 'disabled');
	}

	render() {
		this.domOrderContainer.innerHTML = this.renderDom();
		this.submitOrderBtn = document.querySelector('.submit-order-btn');
		const submitOrderBtn = document.querySelector('.submit-order-btn');
		const nameField = document.querySelector('.order__buyer-name');
		const emailField = document.querySelector('.order__buyer-email');
		const telField = document.querySelector('.order__buyer-phone');

		this.submitOrderBtn.setAttribute('disabled', 'disabled');
		nameField.addEventListener('input', this.validation);
		emailField.addEventListener('input', this.validation);
		telField.addEventListener('input', this.validation);
	}

	renderDom() {
		return `<div class="order__info-container">
			<form action="">
                <h2>Contact number *</h2>
                <input class="order__buyer-phone" placeholder="+380" type="tel">
                <h2>City *</h2>
                <input class="order__buyer-city" type="text">
                <h2>Delivery address</h2>
                <input class="order__buyer-street" type="text" placeholder="Street">
                <input class="order__buyer-build" type="text" placeholder="Build.">
                <input class="order__buyer-app" type="text" placeholder="App.">
                <h2>Buyer</h2>
                <input class="order__buyer-name" type="text" placeholder="First Name and Last Name">
                <input class="order__buyer-email mb-3" class="mb-3" type="email" placeholder="E-mail">
                <div class="d-flex">
                    <button class="btn submit-order-btn" type="button">Submit purchase</button>
                </div>
            </form>
        </div>`
	}
}
