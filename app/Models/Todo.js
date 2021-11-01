import { generateId } from "../Utils/generateId.js"

export class Todo {
  constructor(data) {

    this.id = data.id || generateId()
    this.description = data.description || ''
    this.check = data.completed || false//true or false here
    this.total = 1
    //     id: { type: String, required: true, unique: true }
    //     completed: { type: Boolean, required: true, default: false},
    // user: { type: String, required: true },
    // //You will need to provide a description
    // description: { type: String, required: true },
  }
  get Template() {
    return ` 
    <div>
        <input type="checkbox" onclick="app.todosController.checkBox('${this.id}')" aria-label="Checkbox for following text input" ${this.check == true ? "checked" : ""}>
        ${this.description} yup
        <button class ="btn btn-info" onclick="app.todosController.deleteTodo('${this.id}')" data-toggle="modal" data-target="#exampleModal" >X</button></div>
    `
    // <div class="bg-primary">
    //   <div>
    //     <h1> Todos:</h1>
    //     <div>Total Todos:</div>
    //     <div class="col-12">${this.showTodos()}
    //     </div>

    //     <form class="" onsubmit="app.todosController.createTodo('${this.id}')">
    //       <div class="col-12">
    //         <div class="form-group">
    //           <label for="newTask"></label>
    //           <input type="text" class="my-2 form-control" name="todo" id="todos" aria-describedby="createNewTodo"
    //             placeholder="New Todo">
    //         </div>

    //         <button type="submit"class="btn btn-warning"> add task</button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  }
}





