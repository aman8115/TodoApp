import { useState } from "react";
import './Todo.css'



const TodoApp = () => {
  const [ todos,setTodos] = useState([])
  const [ TodoInput,setTodoInput] = useState('')
  const Add  = ()=>{
    if(TodoInput.trim() !== ''){
      setTodos([...todos,{id:Date.now(),text:TodoInput}])
      console.log(setTodos)
      
    }
    setTodoInput('')
    
  }
  const removeTodo = (id)=>{
     const upDatetodo = todos.filter(todo=> todo.id !== id)
     setTodos(upDatetodo)

  }
  

  return (
    <div className="Todo-wrapper">
      <h1 id="Todo_heading">Todo App</h1>
      <input type="text"
      value={TodoInput}
      onChange={(e)=> setTodoInput(e.target.value)} id="input">

       </input>
     <button onClick={()=> Add() } id="btn"> Add</button>
     <ul id="List"> 
      {todos.map(todo => <li key={todo.id} id="onorder_list">{todo.text}
      <br></br>
        <button onClick={()=> removeTodo(todo.id)} id="remove_btn">Remove</button>
      
      </li>)}
     
     </ul>
     

    
    </div>
  );
};

export default TodoApp;
