import ToDoItem from "./ToDoItem"


const ToDoList = ({todos, removeToDo, updateToDo}) => {
    return (
        <div className="bg-white rounded-t-md [&>article]:px-4 mt-8">

          {todos.map((todo) => (
            <ToDoItem key={todo.id} todo={todo} removeToDo={removeToDo} updateToDo={updateToDo}/>
          ))}


        </div>
    )
}

export default ToDoList