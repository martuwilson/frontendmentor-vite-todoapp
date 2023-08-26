
import { useState } from "react"
import Header from "./components/Header"
import ToDoComputed from "./components/ToDoComputed"
import ToDoCreate from "./components/ToDoCreate"
import ToDoFilter from "./components/ToDoFilter"
import ToDoList from "./components/ToDoList"



const InitialStateToDos = [
  {
    id: 1,
    title: 'Complete online JavaScript course',
    completed: false,
  } ,
  {
    id: 2,
    title: 'Jog around the park 3x',
    completed: false,
  } , 
]


const App = () => {

  const [todos, setTodos] = useState(InitialStateToDos)

  return (
    <div className="bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen">
      <Header/>

      <main className="container mx-auto px-4 mt-8">
 
        <ToDoCreate/> {/* Formulario */}

        <ToDoList todos={todos}/> {/* Lista de tareas */}

        <ToDoComputed/> 
          
        <ToDoFilter/> {/* Filtro de tareas */}
      </main>


      <footer className="text-center mt-8">
        Drag and drop items
      </footer>
    </div>
  )
}

export default App