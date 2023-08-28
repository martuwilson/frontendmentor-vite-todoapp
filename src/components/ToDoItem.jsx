import Check from "./icons/Check"
import Cross from "./icons/cross"


const ToDoItem = ({todo, removeToDo, updateToDo}) => {

  const {id, title, completed} = todo

  return (
    <article className="flex gap-4 py-4 border-b-gray-400
          border-b dark:bg-gray-800">
              <button
              className={`${completed ? "rounded-full border-2 w-5 h-5 flex-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center" : "rounded-full border-2 w-5 h-5 inline-block flex-none"}`}
              onClick={() => updateToDo (id)}
              >
                {
                  completed && <Check/>
                }
              </button>
              <p className={`text-gray-600 dark:text-gray-300 grow ${completed && "line-through"}`}>
                {title}
              </p>
              <button className="flex-none"
              onClick={() => removeToDo (id)}
                >
                <Cross/>
              </button>
          </article>
  )
}

export default ToDoItem