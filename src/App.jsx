import MoonIcon from "./components/icons/Moon"
import Cross from "./components/icons/cross"

const App = () => {
  return (
    <div className="bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen">
      <header className="container mx-auto px-4  pt-8">
        <div className="flex justify-between ">
          <h1 className="uppercase text-white text-3xl font-bold letter tracking-[0.5em]">
            Tareas
          </h1>
          <button>
            <MoonIcon/>
          </button>
           
        </div>

        <form action="" className="bg-white py-4 mt-8 rounded-md overflow-hidden flex gap-4 items-center px-4">
          <span className="rounded-full border-2 w-5 h-5 inline-block">
          </span>
          <input type="text" placeholder="Crear nueva tarea" className="w-full text-gray-400 outline-none"/>
        </form>

      </header>

      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md [&>article]:px-4">

          <article className="flex gap-4 py-4 border-b-gray-400
          border-b">
              <button className="rounded-full border-2 w-5 h-5 inline-block flex-none">
              </button>
              <p className="text-gray-600 grow">
                Tarea 1 - Curso de Programacion
              </p>
              <button className="flex-none">
                <Cross/>
              </button>
          </article>

          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">5 tareas restantes</span>
            <button className="text-gray-400">Limpiar lista</button>
          </section>
          
        </div>


        
      </main>

      <section className="container px-4 mx-auto">
        <div className="bg-white mt-8 px-4 py-4 rounded-md flex justify-center gap-4">
          <button className="hover:text-blue-600">Todos</button>
          <button className="hover:text-blue-600">Activos</button>
          <button className="hover:text-blue-600">Completados</button>

        </div>
      </section>

      <p className="text-center mt-8">
        Drag and drop items
      </p>
    </div>
  )
}

export default App