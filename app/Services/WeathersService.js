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

    // weather to celsius
    // toCelsius() {
    //     const cel = ProxyState.weather.temp - 273
    //     ProxyState.weather.temp = cel
    // }

    //okay, so we would have some math going on here for celsius saying that the current temp numbers in ProxyState all need to minus 273.

    //next we would have something happening so that we could get this all in Farhenheit
    //we would change the Kelvin to the Proxy state of K *(9/5) - 460
    //then we would do some sort of Math.____ to get rid of the decimals

    // toFahra() {
    //     const fahra = ProxyState.weather.temp
    //     const newFahra = fahra * 1.8 - 459.67
    //     newFahra = Math.floor()
    // }


}

export const weathersService = new WeathersService()