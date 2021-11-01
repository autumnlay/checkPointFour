import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";

function _drawTodos() {
    const todos = ProxyState.todos
    let template = ''
    todos.forEach(todo => template += todo.Template)
    document.getElementById('todos').innerHTML = template
}


export class TodosController {
    constructor() {
        ProxyState.on('todos', _drawTodos)
        this.showTodos()
        this.createTodo()
    }
    async showTodos() {
        try {
            await todosService.getAllTodos()
            document.getElementById('todos').innerHTML = ProxyState.todos
        } catch (error) {
            console.error('[ERROR]', error)
        }
    }

    async createTodo(id) {
        try {
            //window.event.preventDefault()
            //const formElem = window.event.target
            //debugger
            //await todosService.createTodo(todoData)
            await todosService.createTodo(id)
            // /** @type {HTMLFormElement} */
            // const todoData = {
            //     description: formElem.description.value
            // }
            // if (id !== 'undefined') {
            //     await todosService.editTodo(todoData, id)
            // } else {
            //     await todosService.createTodo(todoData)
            // }
            formElem.reset()
        } catch (error) {
            console.error("[CREATE ERROR]", error.message)

        }
    }

    async deleteTodo(id) {
        if (window.confirm('Are you sure you wish to delete this Todo?')) {
            await todosService.deleteTodo(id)

        }
    }

    async checkBox(id) {
        await todosService.checkBox(id)
    }
}