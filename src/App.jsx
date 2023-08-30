import { DragDropContext} from "@hello-pangea/dnd";


import { useState, useEffect} from "react"
import Header from "./components/Header"
import ToDoComputed from "./components/ToDoComputed"
import ToDoCreate from "./components/ToDoCreate"
import ToDoFilter from "./components/ToDoFilter"
import ToDoList from "./components/ToDoList"



const InitialStateToDos = JSON.parse(localStorage.getItem('todos')) || []; // lo que hago aca es que si no hay nada en el local storage, que me devuelva un array vacio


const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};




const App = () => {
  // Tasks
  const [todos, setTodos] = useState(InitialStateToDos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)); // JSON.stringify(todos) hace que se guarde en el local storage como un string
  }, [todos])

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

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
        source.index === destination.index &&
        source.droppableId === destination.droppableId
    )
        return;

    setTodos((prevTasks) =>
        reorder(prevTasks, source.index, destination.index)
    );
    };


  return (
    <div className="bg-gray-200 dark:bg-gray-800 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-light.jpg')] ">
      <Header/>

      <main className="container mx-auto px-4 mt-8 md:max-w-xl">
 
        <ToDoCreate createToDo={createToDo}/> {/* Formulario */} {/* cada prop que se le manda luego en el componente tambien se llama en ({**aca**}) =>{...} */}


        <DragDropContext onDragEnd={handleDragEnd}>
          <ToDoList todos={filteredToDos()} removeToDo={removeToDo} updateToDo={updateToDo}/> {/* Lista de tareas */}
        </DragDropContext>

        <ToDoComputed computedItemsLeft={computedItemsLeft} clearCompletedItems={clearCompletedItems}/> 
          
        <ToDoFilter changeFilter={changeFilter} filter={filter}/> {/* Filtro de tareas */}
      </main>


      <footer className="text-center mt-8 dark:text-gray-400">
        You can drag and drop the items
      </footer>
    </div>
  )
}

export default App