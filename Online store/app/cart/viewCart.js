export default class ViewCart {
	constructor() {
		this.dom = document.querySelector('.cart__products-container');
	}

	render(cart) {
		this.dom.innerHTML = cart.map(el => this.renderCartCard(el)).join('');
	}

	renderCartCard({ IMG_LINK, PRODUCT_NAME, UNITS, PRICE }) {
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
                        <img class="cart__item-delete-btn-cross" src="img/cross-button.png" alt="cross icon">
                    </button>
                </div>
            </div>
		`
	}
}
