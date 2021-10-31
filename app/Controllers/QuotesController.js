import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";

function _drawQuote() {
    const quote = ProxyState.quote
    //template = quote.Template
    document.getElementById('quote').innerHTML = quote.Template
}

export class QuotesController {
    constructor() {
        ProxyState.on('quote', _drawQuote)
        this.getQuote()
    }

    async getQuote() {
        try {
            await quotesService.getQuote()
        } catch (error) {
            console.error("[ERROR]", error)
        }
    }
}