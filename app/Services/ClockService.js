import { ProxyState } from "../AppState.js";

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}
class ClockService {
    // constructor() {
    //     ProxyState.on('clock')
    //     document.getElementById("clock").innerText = hour + " : " + min + " : " + sec;
    //     this.currentTime()
    //     this.updateTime()
    // }

    // updateTime(k) {
    //     debugger
    //     if (k < 10) {
    //         return "0" + k;
    //     }
    //     else {
    //         return k;
    //     }
    // }
    currentTime() {
        var date = new Date();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var midday = "AM";
        midday = (hour >= 12) ? "PM" : "AM";
        hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);
        hour = updateTime(hour);
        min = updateTime(min);
        sec = updateTime(sec);
        //document.getElementById("clock").innerText = hour + " : " + min + midday;
        document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday;
        //var t = setTimeout(currentTime, 1000); /* setting timer */
    }

    setIntervalTime() {
        setInterval(this.currentTime, 1000);
    }


    // setTimeout() {
    //     this.currentTime(), 1000
    // }

    //setInterval(updateTime, 3000)
    //currentTime(); 

}

export const clockService = new ClockService