export class Weather {
    constructor(data) {
        this.temp = this.getFahra(data.temp)
        this.tempMin = data.main.temp_min
        this.tempMax = data.main.temp_max
        this.location = data.name
    }
    get Template() {
        return `
        <div class="text-light text-shadow">
        <p>Current Temp: <span id="toCelsius">${this.temp}</span></p>
        <p>High: ${this.tempMax}</p>
        <p>Low: ${this.tempMin}</p>
        <button onclick="app.weatherController.toCelsius()" class="btn btn-secondary"> Change to Celsius</button>
        <button onclick="app.weatherController.toFahra()" class="btn btn-secondary"> Change to Fahrenheit</button>
        </div>
        `
    }

    getFahra(temp) {
        //do tem conversion here
        //const newFahra = temp * 1.8 - 459.67
    }
}