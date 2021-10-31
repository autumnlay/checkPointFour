import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";

export class TodosController {
    constructor() {

    }
    async showTodos() {
        try {
            await todosService.getAllTodos()
            document.getElementById('todos').innerHTML = ProxyState.todos
        } catch (error) {
            console.error('[ERROR]', error)
        }
    }

    async createTodo(todoData) {
        // window.event.preventDefault()
        // const todos = window.event.target
        await todosService.createTodo(todoData)

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