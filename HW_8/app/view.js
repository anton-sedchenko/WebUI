export default class View {
	constructor(handleClickSearch) {
		this.infoContainer = document.querySelector('.info-container');

		document.querySelector('.btn-search-city').addEventListener('click', handleClickSearch);
	}

	renderWeatherInfo(data) {
		const temp = Math.floor(data.main.temp - 273);
		const city = data.name;
		const country = data.sys.country;
		const weatherHTML = `
			<div><h5 class="location">City: ${city}, ${country}</h5></div>
			<div><p class="temperature">Temperature: ${temp}&degC</p></div>`;

		this.infoContainer.innerHTML += weatherHTML;
	}

	clearInfocontainer() {
		this.infoContainer.innerHTML = '';
	}
}
