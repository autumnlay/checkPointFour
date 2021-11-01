import { ProxyState } from "../AppState.js"
import { imagesService } from "../Services/ImagesService.js"

function _printImage() {
    const image = ProxyState.image
    // let template = ''
    // template = image.imgURL
    //document.getElementById('image').src = image.imgURL
    document.body.style.backgroundColor = "green"
    // FIXME the url isn't goin in right...
    document.body.style.backgroundImage = `url('${image.imgURL}')`
    //document.body.style.backgroundImage = "url('template')"

}

export class ImagesController {
    constructor() {
        ProxyState.on('image', _printImage)
        this.getImage()

    }

    async getImage() {
        try {
            await imagesService.getImage()
        } catch (error) {
            console.error("[ERROR]", error)
        }
    }
}