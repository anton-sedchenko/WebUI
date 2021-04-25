'use strict';

class PaginationHelper {
	constructor(arr, num) {
		this.informationArr = arr,
		this.itemsPerPageNum = num
	}

	pageCount() {
		return Math.ceil(this.informationArr.length / this.itemsPerPageNum);
	}

	itemCount() {
		return this.informationArr.length;
	}

	pageItemCount(pageNumber) {
		if (pageNumber < 0 || pageNumber >= this.pageCount()) {
			return -1;
		}

		if (pageNumber === this.pageCount() - 1) {
			return this.informationArr.length % this.itemsPerPageNum;
		}

		return this.itemsPerPageNum;
	}

	pageIndex(index) {
		if (index < 0 || index > this.informationArr.length) {
			return -1;
		}

		return Math.floor(index / this.itemsPerPageNum);
	}
}
