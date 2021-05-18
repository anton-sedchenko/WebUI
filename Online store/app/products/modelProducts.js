export default class ModelProducts {
	#apiUrl = 'https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/1/public/full?alt=json';
	#data = [];
	#currentPageData = [];
	#categories = [];

	constructor() {
		
	}

	load() {
		return fetch(this.#apiUrl)
			.then(r => r.json())
			.then(d => {
				const dataArr = d.feed.entry;
				const columnCount = 8;
				let fieldTitles = [];
				let products = [];
				let k = 0;

				for (let i = 0; i <= columnCount; i++) {
					fieldTitles.push(dataArr[i].content.$t);
				}

				for (let i = columnCount + 1; i < dataArr.length; ) {
					products[k] = {};

					for (let j = 0; j <= columnCount; j++) {
						products[k][fieldTitles[j]] = dataArr[i].content.$t;
						i++;
					}
					k++;
				}
				this.#data = products;
				this.#currentPageData = products;
				console.log(this.data);
				return this.data;
			});
	}

	get data() {
		return this.copy(this.#data);
	}

	get currentPageData() {
		return this.copy(this.#currentPageData);
	}

	set currentPageData(filteredData) {
		this.#currentPageData = filteredData;
	}

	getProductById(id) {
		return this.copy(this.data.find(item => item.ID === id));
	}

	getAllCategories() {
		const categories = new Set();

		this.data.forEach(item => categories.add(item.CATEGORY));
		this.#categories = [...categories];

		return this.#categories;
	}

	copy(product) {
		return JSON.parse(JSON.stringify(product));
	}

	getFilteredProducts(filterCategory) {
		return this.data.filter(item => filterCategory === item.Category);
	}

	filterCheapFirst(currentPageData) {
		return this.currentPageData.sort(this.sortItemsASC);
	}

	filterExpensiveFirst(currentPageData) {
		return this.currentPageData.sort(this.sortItemsDESC);
	}

	sortItemsASC = (a, b) => a.PRICE - b.PRICE;
	sortItemsDESC = (a, b) => b.PRICE - a.PRICE;

	filterDataByName(searchRequest) {
		const regEx = new RegExp(`${ searchRequest }`, 'i');

		const filteredData = this.data.filter(item => {
			return regEx.test(item.PRODUCT_NAME) || regEx.test(item.MANUFACTURE);
		});

		return filteredData;
	}
}
