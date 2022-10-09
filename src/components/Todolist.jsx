import React from "react";
import { useSelector } from "react-redux";
import '../styles/components/Todolist.css'
function Todolist() {
  const { todos } = useSelector((state) => state);
  console.log(todos)
  return(
    <div className="container">
      <h1>Todo List App</h1>
      <form className="todoForm">
        <input type="text"/>
        <button>add</button>
      </form>
      <ul className="allTodos">
      {todos.map((todo)=>(
        <li key={todo.id} className="singleTodos">
          <span className="titleTodos">{todo.title}</span>
          <p>{todo.completed? "complete" : "active"}</p>
        </li>
      ))}
      </ul>

    </div>
  )
  }
export default Todolist;
