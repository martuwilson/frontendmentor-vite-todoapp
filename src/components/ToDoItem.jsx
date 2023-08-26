import Cross from "./icons/cross"


const ToDoItem = ({todo}) => {

  const {id, title, completed} = todo

  return (
    <article className="flex gap-4 py-4 border-b-gray-400
          border-b">
              <button className="rounded-full border-2 w-5 h-5 inline-block flex-none">
              </button>
              <p className="text-gray-600 grow">
                {title}
              </p>
              <button className="flex-none">
                <Cross/>
              </button>
          </article>
  )
}

export default ToDoItem