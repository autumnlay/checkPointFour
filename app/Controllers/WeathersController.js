import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";

function _drawWeather() {
    const weather = ProxyState.weather
    document.getElementById('weather').innerHTML = weather.Template
}


export class WeathersController {
    constructor() {
        ProxyState.on('weather', _drawWeather)
        this.getWeather()
    }

    async getWeather() {
        try {
            await weathersService.getWeather()
            //do math here for maybe
        } catch (error) {
            console.error("[ERROR]", error)
        }
    }
}