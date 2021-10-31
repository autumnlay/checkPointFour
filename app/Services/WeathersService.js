import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { sandBoxApi } from "./AxiosService.js"

class WeathersService {
    async getWeather() {
        const res = await sandBoxApi.get('weather')
        console.log(res.data)
        ProxyState.weather = new Weather(res.data)
        // do math here!
    }

}

export const weathersService = new WeathersService()