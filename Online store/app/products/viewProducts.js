export default class ViewProducts {
	constructor() {
		this.dom = document.querySelector('.section-gallery__content');
	}

	render(d) {
		this.dom.innerHTML = d.map(el => this.renderCard(el)).join('');
	}

	renderCard({ IMG_LINK, PRODUCT_NAME, UNITS, CATEGORY, PRICE }) {
		return `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 section-gallery__card p-2">
                <div class="section-gallery__card-content-wrapper">
                	<div class="section-gallery__card-descr">
						<div class="section-gallery__product-image-block mb-3">
	                    	<img class="section-gallery__product-image" src=${ IMG_LINK } alt="${ PRODUCT_NAME }">
	                    </div>
	                    <p class="section-gallery__product-title mb-2">${ PRODUCT_NAME }</p>
	                    <span>Units: ${ UNITS }</span>
	                    <span>Category: ${ CATEGORY }</span>
	                    <p class="section-gallery__product-price mb-2">Price: ${ PRICE } uah</p>
                	</div>
                    <button class="btn section-gallery__order-btn">Добавить в корзину</button>
                </div>
            </div>`
	}
}