export default class ViewCart {
	#orderedCount = {};

	constructor(handleRemoveFromCart, onClickMakeOrder) {
		this.domProductsContainer = document.querySelector('.cart__products-container');
		this.domCartBtn = document.querySelector('.header__cart-container');
		this.domCartContainer = document.querySelector('.cart-modal-window');
		this.domBody = document.querySelector('body');
		this.domOrderBtn = document.querySelector('.cart__order-btn');
		this.onClickMakeOrder = onClickMakeOrder;
		this.domCartBtn.addEventListener('click', this.onClickRenderCart);
		this.domCartContainer.addEventListener('click', this.onClickCloseCart);
		this.domCartContainer.addEventListener('click', handleRemoveFromCart);
	}

	get orderedCount() {
		return this.#orderedCount;
	}

	set orderedCount(count) {
		this.#orderedCount = count;
	}

	saveOrderData() {
		const domCountOfProducts = [...document.querySelectorAll('.product-describe__quantity')];
		const domTotalPrice = document.querySelector('.cart__total-price');

		domCountOfProducts.forEach(item => {
			this.orderedCount[item.dataset.id] = item.textContent;
		});
		this.orderedCount.totalPrice = +domTotalPrice.textContent;
	}

	onClickRenderCart = () => {
		this.domCartContainer.classList.toggle('close');

		if (!this.domCartContainer.classList.contains('close')) {
			this.domBody.style.overflow = 'hidden';
		}
	}

	onClickCloseCart = (evt) => {
		if (evt.target === this.domCartContainer || evt.target === this.domOrderBtn) {
			this.domCartContainer.classList.toggle('close');
			this.domBody.style.overflow = 'auto';
		}
	}

	onClickSumPriceChange = (evt) => {
		const productId = evt.target.dataset.id;
		const domProductCounters = [...document.querySelectorAll('.product-describe__quantity')];
		const domProductSums = [...document.querySelectorAll('.cart__product-sum')];
		const domProductPrices = [...document.querySelectorAll('.cart__product-price')];

		const domCounter = domProductCounters.find(item => {
			return productId === item.dataset.id;
		});
		const domProductPrice = domProductPrices.find(item => {
			return productId === item.dataset.id;
		});
		const domProductSum = domProductSums.find(item => {
			return productId === item.dataset.id;
		});

		let productCounter = +domCounter.textContent;
		const productPrice = +domProductPrice.textContent;
		let currentSumOfProduct = +domProductSum.textContent;


		if (evt.target.classList.contains('product-count-minus-btn')) {
			if (productCounter === 1) return;
			productCounter -= 1;
			currentSumOfProduct -= productPrice;
		} else {
			productCounter += 1;
			currentSumOfProduct += productPrice;
		}

		domCounter.innerHTML = productCounter;
		domProductSum.innerHTML = currentSumOfProduct;
		this.renderTotalPrice(productId);
		this.saveOrderData();
	}

	renderTotalPrice() {
		const domProductSums = [...document.querySelectorAll('.cart__product-sum')];
		const domTotalPrice = document.querySelector('.cart__total-price');
		const totalSum = domProductSums.reduce((sum, curr) => {
			return sum + (+curr.textContent);
		}, 0);

		domTotalPrice.innerHTML = totalSum;
	}

	render(newProduct) {
		this.domProductsContainer.innerHTML = newProduct.map(el => this.renderCartCard(el)).join('');
		const allProductCounterBtns = document.querySelectorAll('.product-describe__counter-btn');

		allProductCounterBtns.forEach(btn => {
			btn.addEventListener('click', this.onClickSumPriceChange);
		});
		this.domOrderBtn.addEventListener('click', this.onClickMakeOrder);
	}

	renderCartCard({ IMG_LINK, PRODUCT_NAME, UNITS, PRICE, ID }) {
		return `
			<div class="cart__item-container">
				<div class="col-sm-9 cart__item">
					<div class="col-sm-4 cart__item-img-container">
						<img class="cart__item-img" src=${ IMG_LINK } alt="${ PRODUCT_NAME }">
					</div>
					<div class="col-sm-8 cart__item-describe">
						<div class="cart__item-describe-top mb-2">
			                <p class="cart__item-title mb-3">${ PRODUCT_NAME }</p>
			                <p class="cart__item-units">${ UNITS }</p>
			            </div>
			            <div class="cart__item-describe-bottom">
							<p class="mb-2">Price: 
								<span class="cart__product-price" data-id="${ ID }">${ PRICE }</span> UAH
							</p>
			                <div class="product-describe__counter">
			                    <button data-id="${ ID }" class="btn product-describe__counter-btn product-count-minus-btn">-</button>
			                    <div data-id="${ ID }" class="product-describe__quantity">1</div>
			                    <button data-id="${ ID }" class="btn product-describe__counter-btn product-count-plus-btn">+</button>
			                </div>
			            </div>
					</div>
                </div>
                <div class="col-sm-2">
	                <p>Sum: <span class="cart__product-sum" data-id="${ ID }">${ PRICE }</span> UAH</p>
	            </div>
	            <div class="col-sm-1 cart__item-delete-btn-wrapper">
                    <button class="cart__item-delete-btn">
                        <img class="cart__item-delete-btn-cross" 
                        src="img/cross-button.png" alt="cross icon" 
                        data-id="${ ID }">
                    </button>
	            </div>
            </div>
		`
	}
}
