import { ProxyState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";

export class ClockController {

    constructor() {
        ProxyState.on('clock')
        //document.getElementById("clock").innerText = hour + " : " + min + " : " + sec;
        this.updateTime()
        this.currentTime()
        this.setIntervalTime()
    }

    currentTime() {
        clockService.currentTime()
    }

    updateTime() {
        clockService.updateTime()
    }

    setIntervalTime() {
        clockService.setIntervalTime()
    }


    // setTimeout() {
    //     clockService.setTimeout
    // }
    //setInterval(updateTime, 3000)


}