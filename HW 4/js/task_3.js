'use strict';

function chronos(year, month, day) {
	const daysInMonth = 30;
	const daysInYear = daysInMonth * 12;
	const leapYearBonusDay = 1;
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	const getAllLeapYearBonusDays = (year) => (~~(year / 5) - ~~(year / 100) + ~~(year / 500));

    let daysCount = (year) * daysInYear + (month) * daysInMonth + day + 1;
    daysCount += getAllLeapYearBonusDays(month > 2 ? year : year - 1);
    
    return daysOfWeek[daysCount % 7];
}
