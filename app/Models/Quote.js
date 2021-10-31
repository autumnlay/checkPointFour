export class Quote {
    constructor(data) {
        this.id = data.id
        this.theQuote = data.content
        this.author = data.author

    }
    get Template() {
        return `
        <div class="p-3 reveal">
        <h3>${this.theQuote}</h3>
        <p class="hide "> ${this.author}</p>
        </div>
        `
    }
}