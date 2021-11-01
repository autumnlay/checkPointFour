import { WeathersController } from "./Controllers/WeathersController.js"
import { QuotesController } from "./Controllers/QuotesController.js"
import { ImagesController } from "./Controllers/ImagesController.js"
import { TodosController } from "./Controllers/TodosController.js"
import { ClockController } from "./Controllers/ClockController.js"



class App {
  weathersController = new WeathersController()
  quotesController = new QuotesController()
  imagesController = new ImagesController()
  todosController = new TodosController()
  clockController = new ClockController()
}

window["app"] = new App();
