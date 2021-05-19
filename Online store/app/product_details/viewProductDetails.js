export default class ViewProductDetails {
	constructor() {
		this.domProductDetailsWindow = document.querySelector('.product__modal-window');
		this.domProductContainer = document.querySelector('.product__container');
		this.domBody = document.querySelector('body');
		this.domProductDetailsBtn = document.querySelector('.section-gallery__details-btn');

		this.domProductDetailsWindow.addEventListener('click', 
			this.onClickCloseProductDetailsWindow);
	}

	showProductDetailsWindow() {
		this.domProductDetailsWindow.classList.toggle('close');

		if (!this.domProductDetailsWindow.classList.contains('close')) {
			this.domBody.style.overflow = 'hidden';
		}
	}

	onClickCloseProductDetailsWindow = (evt) => {
		if (evt.target === this.domProductDetailsWindow) {
			this.domProductDetailsWindow.classList.toggle('close');
			this.domBody.style.overflow = 'auto';
		}
	}

	render(product) {
		this.domProductContainer.innerHTML = product;
	}

	renderProductDetails(product) {
		if (!product) return;

		const productImg = product.IMG_LINK;
		const productName = product.PRODUCT_NAME;
		const productUnits = product.UNITS;
		const productManufacture = product.MANUFACTURE;
		const productCategory = product.CATEGORY;
		const productIngridients = product.INGRIDIENTS;
		const productPrice = product.PRICE;
		const productAmount = product.AMOUNT;
		const productId = product.ID;

		return `
			<div class="col-sm-11 product__image-container">
                <img class="product-image" src=${ productImg } alt="milk">
            </div>
            <div class="col-sm-11 product__describe-text-container">
                <p class="product__describe-title">Product name: 
                    <span class="ml-2">${ productName }</span>
                </p>
                <p class="product__describe-title">Units: 
                    <span class="ml-2">${ productUnits }</span>
                </p>
                <p class="product__describe-title">Price: 
                    <span class="ml-2">${ productPrice }</span>
                </p>
                <hr>
                <p class="product__describe-title">Category: 
                    <span class="ml-2">${ productCategory }</span>
                </p>
                <p class="product__describe-title">Manufacture: 
                    <span class="ml-2">${ productManufacture }</span>
                </p>
                <p class="product__describe-title">Ingridients: 
                    <span class="ml-2">${ productIngridients }</span>
                </p>
                <p class="product__describe-title">Amount: 
                    <span class="ml-2">${ productAmount }</span>
                </p>
            </div>
            <button class="btn section-gallery__add-to-cart-btn" data-id="${ productId }">Add to cart</button>`
	}
}
