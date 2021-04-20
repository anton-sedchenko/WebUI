'use strict';

function chronos(year, month, day) {
	const daysInMonth = 30;
	const daysInYear = daysInMonth * 12;
	const leapYearBonusDay = 1;
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	const getAllLeapYearBonusDays = (year) => Math.floor(((year / 5) - (year / 100) + (year / 500)) * leapYearBonusDay);

    let daysCount = (year - 1) * daysInYear + (month - 1) * daysInMonth + day - 1;
    daysCount += getAllLeapYearBonusDays(month > 2 ? year : year - 1);
    
    return daysOfWeek[daysCount % 7];
}

// console.log(chronos(5, 8, 25)); // return 'Tuesday'
// console.log(chronos(1001, 8, 24)); // return 'Tuesday'
// console.log(chronos(1, 1, 1)); // return 'sun'
// console.log(chronos(1, 8, 24)); // return 'Tuesday'
// console.log(chronos(1, 8, 25)); // return 'wed'
// console.log(chronos(1000, 1, 20)); // return 'mon'
// console.log(chronos(1000, 2, 30)); // return 'sat'
// console.log(chronos(1001, 8, 23)); // return 'mon'
// console.log(chronos(1001, 8, 24)); // return 'Tuesday'
// console.log(chronos(2020, 8, 24)); // return 'sun'
// console.log(chronos(3020, 8, 24)); // return 'sun'



