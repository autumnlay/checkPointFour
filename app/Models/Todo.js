import { generateId } from "../Utils/generateId.js"

export class Todo {
    constructor(data) {
        this.id = data.id
        this.task = data.description
        this.check = data.completed || false
        this.total = 1//true or false here

    }
    get Template() {
        return `
        <div>
        <input type="checkbox" onclick="app.todosController.checkBox('${this.id}')" aria-label="Checkbox for following text input" ${this.check == true ? "checked" : ""}>
        ${this.task} yup
        <button class="btn btn-info" onclick="app.todosController.deleteTodo('${this.id}')" data-toggle="modal" data-target="#exampleModal" >X</button></div>
        `
    }
}