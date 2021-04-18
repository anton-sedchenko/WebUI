'use strict';

function meeting(rooms, chairsNeed) {
	let spareChairs = 0;
	let currentRoomChairs = 0;
	let result = [];

	if (chairsNeed === 0) {
		return 'Game On';
	}

	for (let i = 0; i < rooms.length; i++) {
		const freeRoomChairs = rooms[i][1];
		const peopleAtRoom = rooms[i][0].split('').length;

		currentRoomChairs = freeRoomChairs - peopleAtRoom;

		if (currentRoomChairs >= 0) {
			spareChairs += currentRoomChairs;
			result.push(currentRoomChairs);	
		} else {
			result.push(0);
		}

		if (spareChairs === chairsNeed) {
			return result;
		}
	}

	return 'Not enough!';
}
