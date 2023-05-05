import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'

// import { selectFilteredTodoIds } from './todosSlice'

const TodoList = () => {
//   const todoIds = useSelector(selectFilteredTodoIds)
  const todos = useSelector((state) => state.todos)

//   if (loadingStatus === 'loading') {
//     return (
//       <div className="todo-list">
//         <div className="loader" />
//       </div>
//     )
//   }

  const renderedListItems = todos.map((todoId) => {
    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList