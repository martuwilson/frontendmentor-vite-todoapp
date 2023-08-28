const ToDoComputed = ({computedItemsLeft, clearCompletedItems}) => {

  return (
    <section className="py-4 px-4 rounded-b-md flex justify-between bg-white">
            <span className="text-gray-400"> {computedItemsLeft} tareas restantes</span>
            <button
            className="text-gray-400"
            onClick={clearCompletedItems}
            >Limpiar lista</button>
    </section>
  )
}

export default ToDoComputed