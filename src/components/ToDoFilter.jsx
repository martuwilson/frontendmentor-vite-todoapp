
const ToDoFilter = () => {
  return (
    <section className="container mx-auto">
          <div className="bg-white mt-8 px-4 py-4 rounded-md flex justify-center gap-4">
            <button className="hover:text-blue-600">Todos</button>
            <button className="hover:text-blue-600">Activos</button>
            <button className="hover:text-blue-600">Completados</button>

          </div>
    </section>
  )
}

export default ToDoFilter