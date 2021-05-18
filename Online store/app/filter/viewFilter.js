export default class ViewFilter {
	constructor(onClickFilterCategories) {
		this.domFilterCategoryBtn = document.querySelector('.category-filter-submit-btn');
		this.domCategoryFilter = document.querySelector('.category-filter');
		this.domFilterResetBtn = document.querySelector('.filter-reset-btn');
		this.onClickFilterCategories = onClickFilterCategories;
	}

	render(categories) {
		for (let i = 0; i < categories.length; i++) {
			this.domCategoryFilter.insertAdjacentHTML('beforeEnd', 
				`<option>${ categories[i] }</option>`);
		}

		this.addlisteners();
	}

	addlisteners() {
		this.domFilterCategoryBtn.addEventListener('click', this.onClickFilterCategories);
		this.domFilterResetBtn.addEventListener('click', () => {
			this.domCategoryFilter.firstElementChild.selected = true;
		});
	}
}
