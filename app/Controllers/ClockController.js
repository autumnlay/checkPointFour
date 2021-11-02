import { ProxyState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";

export class ClockController {

    constructor() {
        ProxyState.on('clock')
        //document.getElementById("clock").innerText = hour + " : " + min + " : " + sec;
        this.currentTime()
        this.setIntervalTime()
    }

    currentTime() {
        clockService.currentTime()
    }

    setIntervalTime() {
        clockService.setIntervalTime()
    }


    // setTimeout() {
    //     clockService.setTimeout
    // }
    //setInterval(updateTime, 3000)


}