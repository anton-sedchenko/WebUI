'use strict';

class Hex {
	constructor(num) {
		this.number = num
	}

	equals() {
		return parseInt(this.number, 10);
	}

	toString() {
		return '0x' + this.number.toString(16).toUpperCase();
	}

	toJSON() {
		return '0x' + this.number.toString(16).toUpperCase();
	}

	valueOf() {
		return parseInt(this.number, 10);
	}

	plus(arg) {
		const hexSum = (this.equals(this.number) + this.equals(arg));
		return new Hex(hexSum);
	}

	minus(arg) {
		const hexDif = (this.equals(this.number) - this.equals(arg));
		return new Hex(hexSum);
	}

	parse(arg) {
		return parseInt(arg, 10);
	}
}
