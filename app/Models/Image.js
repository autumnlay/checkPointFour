export class Image {
    constructor(data) {
        this.imgURL = data.largeImgUrl
        this.tag = data.tags
        this.query = data.query

    }
    get Template() {
        return `
        <div style="background-image: url('${this.imgURL}');">
        <div id="quote"> test here</div>
        
        </div>
        `
    }
}