export default class ModelFilter {
	#data = [];

	render(categories) {
		for (let i = 0; i < categories.length; i++) {
			this.domCategoryFilter.insertAdjacentHTML('beforeEnd', 
				`<option>${ categories[i] }</option>`);
		}
	}

	get data() {
		return this.copy(this.#data);
	}

	set data(data) {
		this.#data = data;
	}

	copy(product) {
		return JSON.parse(JSON.stringify(product));
	}

	getFilteredDataByCategory(filterInput) {
		return this.data.filter(item => item.CATEGORY === filterInput);
	}
}
