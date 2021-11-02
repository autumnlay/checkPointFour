export class Quote {
    constructor(data) {
        this.id = data.id
        this.theQuote = data.content
        this.author = data.author

    }
    get Template() {
        return `
        <div class="p-3 reveal text-light text-shadow my-3">
        <h3 class="text-light text-shadow">${this.theQuote}</h3>
        <p class="hide "> ${this.author}</p>
        </div>
        `
    }
}