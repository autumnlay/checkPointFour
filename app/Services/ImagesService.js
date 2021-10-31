import { ProxyState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { sandBoxApi } from "./AxiosService.js"

class ImagesService {
    async getImage() {
        const res = await sandBoxApi.get('images')
        console.log(res.data);
        ProxyState.image = new Image(res.data)
    }
}

export const imagesService = new ImagesService()