export class Weather {
    constructor(data) {
        this.temp = data.main.temp
        this.tempMin = data.main.temp_min
        this.tempMax = data.main.temp_max
        this.location = data.name
    }
    get Template() {
        return `
        <div> yeah, the weather </div>
        `
    }
}