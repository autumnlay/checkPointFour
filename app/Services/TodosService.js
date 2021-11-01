import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { sandBoxApi } from "./AxiosService.js"

class TodosService {

    async getAllTodos() {
        const res = await sandBoxApi.get('autumn/todos')
        console.log(res.data)
        const todos = res.data.map(t => new Todo(t))
        ProxyState.todos = todos
    }

    async createTodo(todoData) {
        const res = await sandBoxApi.post('autumn/todos', todoData)
        const todo = new Todo(res.data)
        ProxyState.todos = [...ProxyState.todos, todo]
    }

    async editTodo(todoData, id) {
        const res = await sandBoxApi.put('autumn/todos' + id, todoData)
        const index = ProxyState.todos.findIndex(t => t.id == id)
        ProxyState.todos.splice(index, 1, new Todo(res.data))
        ProxyState.todos = ProxyState.todos
    }

    async deleteTodo(id) {
        await sandBoxApi.delete('autumn/todos' + id)
        ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
    }

    async checkBox(id) {
        const found = ProxyState.todos.find(c => c.id == id)
        found.check = !found.check
        const res = await sandBoxApi.put(found.id, found)

        ProxyState.todos = ProxyState.todos
    }
}

export const todosService = new TodosService()