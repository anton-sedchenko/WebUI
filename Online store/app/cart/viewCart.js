export default class ViewCart {
	constructor(handleRemoveFromCart) {
		this.domProductsContainer = document.querySelector('.cart__products-container');
		this.domCartBtn = document.querySelector('.header__cart-container');
		this.domCartContainer = document.querySelector('.cart-modal-window');
		this.domBody = document.querySelector('body');
		this.domCartBtn.addEventListener('click', this.onClickRenderCart);
		this.domCartContainer.addEventListener('click', this.onClickCloseCart);
		this.domCartContainer.addEventListener('click', handleRemoveFromCart);

	}

	onClickRenderCart = () => {
		this.domCartContainer.classList.toggle('close');

		if (!this.domCartContainer.classList.contains('close')) {
			this.domBody.style.overflow = 'hidden';
		}
	}

	onClickCloseCart = (evt) => {
		if (evt.target === this.domCartContainer) {
			this.domCartContainer.classList.toggle('close');
			this.domBody.style.overflow = 'auto';
		}
	}

	render(newProduct) {
		this.domProductsContainer.innerHTML = newProduct.map(el => this.renderCartCard(el)).join('');
	}

	renderCartCard({ IMG_LINK, PRODUCT_NAME, UNITS, PRICE, ID }) {
		return `
			<div class="cart__item-container">
                <img class="col-sm-2 cart__item-img" src=${ IMG_LINK } alt="${ PRODUCT_NAME }">
                <p class="col-sm-3 cart__item-title">${ PRODUCT_NAME }</p>
                <p class="col-sm-1 cart__item-units">${ UNITS }</p>
                <p class="col-sm-1 cart__item-price">${ PRICE }</p>
                <div class="col-sm-2 product-describe__counter">
                    <button class="btn product-describe__counter-btn">-</button>
                    <div class="product-describe__quantity">1</div>
                    <button class="btn product-describe__counter-btn">+</button>
                </div>
                <p class="col-sm-2 cart__item-total-price">120 грн</p>
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
