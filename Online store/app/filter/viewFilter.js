export default class ViewFilter {
	constructor(handleCategoriesFilter) {
		this.domCategoryFilter = document.querySelector('.category-filter');
		this.domCategoryFilter.addEventListener('change', handleCategoriesFilter);
	}

	render(categories) {
		for (let i = 0; i < categories.length; i++) {
			this.domCategoryFilter.insertAdjacentHTML('beforeEnd', 
				`<option>${ categories[i] }</option>`);
		}
	}


}
