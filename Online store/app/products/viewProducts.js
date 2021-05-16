export default class ViewProducts {
	orderBtnsClass = '.section-gallery__order-btn';

	constructor(onClickAddToCart) {
		this.dom = document.querySelector('.section-gallery__content');
		this.onClickAddToCart = onClickAddToCart;
	}

	render(d) {
		this.dom.innerHTML = d.map(el => this.renderCard(el)).join('');
		this.addlisteners();
	}

	renderCard({ IMG_LINK, PRODUCT_NAME, UNITS, CATEGORY, PRICE, ID }) {
		return `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 section-gallery__card p-2">
                <div class="section-gallery__card-content-wrapper">
                	<div class="section-gallery__card-descr">
						<div class="section-gallery__product-image-block mb-3">
	                    	<img class="section-gallery__product-image" src=${ IMG_LINK } alt="${ PRODUCT_NAME }">
	                    </div>
	                    <p class="section-gallery__product-title fs-3 fw-bold mb-2">${ PRODUCT_NAME }</p>
	                    <p class="section-gallery__product-units">Units: 
	                    	<span>${ UNITS }</span>
	                    </p>
	                    <p class="section-gallery__product-category">Category: 
	                    	<span>${ CATEGORY }</span>
	                    </p>
	                    <p class="section-gallery__product-price mb-2">Price:
	                    	<span>${ PRICE } uah</span>
	                    </p>
                	</div>
                    <button class="btn section-gallery__order-btn" data-id="${ ID }">Добавить в корзину</button>
                </div>
            </div>`
	}

	addlisteners() {
		[...document.querySelectorAll(this.orderBtnsClass)]
			.forEach(btn => btn.addEventListener('click', this.onClickAddToCart));
	}
}
