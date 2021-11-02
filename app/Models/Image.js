export class Image {
    constructor(data) {
        this.largeImgUrl = data.largeImgUrl
        this.tag = data.tags
        this.query = data.query

    }
    get Template() {
        return `
        <div style="background-image: url('${this.largeImgUrl}');">
        <div id="quote"> test here</div>
        
        </div>
        `
    }
}