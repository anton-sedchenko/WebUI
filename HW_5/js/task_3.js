'use strict';

function tickets(clients) {
	let cash = [];
	const ticketCost = 25;

	if (clients[0] !== ticketCost) {
		return 'NO';
	}

	const isChange = clients.every(client => {
		if (client === ticketCost) {
			cash.push(ticketCost);
		}

		if (client === 50) {
			const is25Change = cash.some(change => change === 25);
			
			if (is25Change) {
				cash.splice(cash.indexOf(25), 1);
				cash.push(50);
			} else {
				return false;
			}
		}

		if (client === 100) {
			const is25Change = cash.some(change => change === 25);
			const is50Change = cash.some(change => change === 50);
			const is75ChangeBy25 = cash.filter(change => change === 25);

			if ((is25Change && is50Change) || (is75ChangeBy25.length >= 3)) {
				cash.splice(cash.indexOf(50), 1);
				cash.push(100);
			} else {
				return false;
			}
		}

		return true;
	});

	return isChange ? 'YES' : 'NO';
};
