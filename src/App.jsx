
import { useState } from "react"
import Header from "./components/Header"
import ToDoComputed from "./components/ToDoComputed"
import ToDoCreate from "./components/ToDoCreate"
import ToDoFilter from "./components/ToDoFilter"
import ToDoList from "./components/ToDoList"



const InitialStateToDos = []


const App = () => {
  // Tasks
  const [todos, setTodos] = useState(InitialStateToDos);
  // Filter tasks
  const [filter, setFilter] = useState('all')

  const createToDo = (title) => {
    const newToDo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    }

    setTodos([...todos, newToDo])
  }

  const updateToDo = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    }))
  }

  const removeToDo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;
  const clearCompletedItems = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  /* Filters */

  const changeFilter = (filter) => setFilter(filter)

  const filteredToDos = () => {
    switch (filter) {
      case 'all':
        return todos
      case 'active':
        return todos.filter((todo) => !todo.completed)
      case 'completed':
        return todos.filter((todo) => todo.completed)
      default:
        return todos
    }
  }


  return (
    <div className="bg-gray-200 dark:bg-gray-800 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]">
      <Header/>

      <main className="container mx-auto px-4 mt-8">
 
        <ToDoCreate createToDo={createToDo}/> {/* Formulario */} {/* cada prop que se le manda luego en el componente tambien se llama en ({**aca**}) =>{...} */}

        <ToDoList todos={filteredToDos()} removeToDo={removeToDo} updateToDo={updateToDo}/> {/* Lista de tareas */}

        <ToDoComputed computedItemsLeft={computedItemsLeft} clearCompletedItems={clearCompletedItems}/> 
          
        <ToDoFilter changeFilter={changeFilter} filter={filter}/> {/* Filtro de tareas */}
      </main>


      <footer className="text-center mt-8 dark:text-gray-400">
        Drag and drop items
      </footer>
    </div>
  )
}

export default App