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

			console.log(cash);
		}

		if (client === 50) {
			const index25Change = cash.indexOf(25);
			
			if (index25Change > -1) {
				cash.splice(index25Change, 1);
				cash.push(50);

				console.log(cash);
			} else {
				return false;
			}
		}

		if (client === 100) {
			const index25Change = cash.indexOf(25);
			const index50Change = cash.indexOf(50);
			const is75ChangeBy25 = cash.filter(change => change === 25);

			if (index25Change > -1 && index50Change > -1) {
				cash.splice(index25Change, 1);
				cash.splice(cash.indexOf(50), 1);
				cash.push(100);

				return true;
			}

			if ((is75ChangeBy25.length >= 3)) {
				for (let i = is75ChangeBy25.length; i > 0; i--) {
					cash.splice(cash.indexOf(25), 1);
					cash.push(100);

					return true;
				}
			} else {
				return false;
			}
		}

		return true;
	});

	return isChange ? 'YES' : 'NO';
};
