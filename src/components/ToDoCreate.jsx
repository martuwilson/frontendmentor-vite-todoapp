import { useState } from "react";

const ToDoCreate = ({
  createToDo
}) => {

  const [title, setTitle] = useState('')

  const handleSubmitToDo = (e) => {
    e.preventDefault();
    console.log(title)

    if (!title.trim()) {
      return setTitle('')
    }

    createToDo (title)
    setTitle('')
  }

    return(
        <form onSubmit={handleSubmitToDo} className="bg-white py-4 mt-8 rounded-md overflow-hidden flex gap-4 items-center px-4">
          <span className="rounded-full border-2 w-5 h-5 inline-block">
          </span>
          <input
          type="text"
          placeholder="Crear nueva tarea"
          className="w-full text-gray-400 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
      </form>
    )
}

export default ToDoCreate;