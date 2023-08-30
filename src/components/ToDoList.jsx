/* eslint-disable react/prop-types */
import { Droppable, Draggable } from "@hello-pangea/dnd";

import ToDoItem from "./ToDoItem"


const ToDoList = ({todos, removeToDo, updateToDo}) => {
    return (
      <Droppable droppableId="todos">
        {
          (droppableProvided) =>(

              <div
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
              className="bg-white rounded-t-md [&>article]:px-4 mt-8">

                {todos.map((todo, index) => (

                  <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>


                    {
                      (draggableProvider)=>(
                          <ToDoItem
                          key={todo.id}
                          todo={todo}
                          removeToDo={removeToDo}
                          updateToDo={updateToDo}
                          ref={draggableProvider.innerRef}
                          {...draggableProvider.dragHandleProps}
                          {...draggableProvider.draggableProps}
                          />
                      )
                    }

                    
                    
                  </Draggable>

                ))}

                {droppableProvided.placeholder}
              </div>
          )
        }
      </Droppable>
    )
}

export default ToDoList