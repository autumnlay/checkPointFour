import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Todo {
  constructor(data) {

    this.id = data.id || generateId()
    this.description = data.description || ''
    this.completed = data.completed //true or false here
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
        <input type="checkbox" name"check" id="check" onclick="app.todosController.checkBox('${this.id}')" aria-label="Checkbox for following text input" ${this.completed == true ? "checked" : ""}>
        ${this.description}
        <button class="btn btn-info my-1" onclick="app.todosController.deleteTodo('${this.id}')" data-toggle="modal" data-target="#exampleModal" >
        X
        </button>
        
    </div>
        `
  }
  //   get Checkbox() {
  //     if (!this.id) {
  //       return ''
  //     }
  //     return `        
  //         <input type="checkbox" ${this.check ? 'checked' : ''} name="checkBox" id="CheckBox" onclick="app.todosController.checkBox()">
  //         `
  //   }


}







// /* <span title="delete todo" class='justify-self-end selectable text-danger lighten-20' onclick="app.todosController.deleteTodo('${this.id}')">delete2</i></span> */