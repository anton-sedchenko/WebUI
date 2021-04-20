'use strict';

function ipsBetween(lessOneIp, biggerOneIp) {
	let stepPow = 4;

	function countIps(ip) {
		const arr = ip.split('.');
		let ipSum = 0;

		for (let i = 0; i < arr.length; i++) {
			stepPow -= 1;
			let stepSumIp = arr[i] * Math.pow(256, stepPow);
			ipSum += stepSumIp;
		}

		stepPow = 4;
		return ipSum + 1;
	}
	return countIps(biggerOneIp) - countIps(lessOneIp);
}
