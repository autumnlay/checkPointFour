import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";

function _drawTodos() {

    const todos = ProxyState.todos
    let template = ''
    todos.forEach(todo => template += todo.Template)
    document.getElementById('todos').innerHTML = template
}

// function _getCount() {
//     const allChecks = ProxyState.todos.find(c => c.id == id)
//     const completedTodos = ProxyState.todos.filter(c => c.completed == true)
//     document.getElementById('checkBoxTotal').innerHTML = `${completedTodos.length} / ${ProxyState.todos.length}`
//     //return `${completedTodos.length} / ${allChecks.length}`
// }

export class TodosController {
    constructor() {
        ProxyState.on('todos', _drawTodos)
        this.showTodos()
        //ProxyState.on('checkBoxTotal', getCount())
        this.getCount()
        // this.createTodo()
        //this.checkBox()
    }
    async showTodos() {
        try {
            await todosService.getAllTodos()
        } catch (error) {
            console.error('[ERROR]', error)
        }
    }

    async createTodo() {
        try {
            //debugger
            window.event.preventDefault()
            const formElem = window.event.target
            //debugger
            //await todosService.createTodo(todoData)
            //await todosService.createTodo(id)
            // /** @type {HTMLFormElement} */
            const todoData = {
                description: formElem.description.value
            }
            await todosService.createTodo(todoData)
            // if (id !== 'undefined') {
            //     await todosService.editTodo(todoData, id)
            // } else {
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
        try {
            await todosService.checkBox(id)
        } catch (error) {
            console.error("[check box ERROR", error)
        }
    }
    async getCount(id) {
        try {
            await todosService.getCount(id)
        } catch (error) {
            console.error("[check box ERROR", error)
        }
    }
}