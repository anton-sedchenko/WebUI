export default class Model {
	constructor(handleLoadData) {
		this.handleLoadData = handleLoadData;
	}

	getCity() {
		const city = document.querySelector('.form-control').value;
		return city;
	}

	load(city) {
		const API = '5c0e50347ce7db91c41880823ed60683';

		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`)
			.then(resp => resp.json())
			.then(data => this.handleLoadData(data))
			.catch((error) => console.log('error: ' + error));
	}
}
