import { Quote } from "../Models/Quote.js";
import { ProxyState } from "../AppState.js";
import { sandBoxApi } from "./AxiosService.js"


class QuotesService {
    async getQuote() {
        const res = await sandBoxApi.get('quotes')
        console.log(res.data);
        ProxyState.quote = new Quote(res.data)
    }

}

export const quotesService = new QuotesService()