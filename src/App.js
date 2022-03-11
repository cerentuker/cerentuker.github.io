import React, {useState} from "react";
import TodoList from "./Todolist";

function App() {
  const [todos, setTodos] = useState([{id:1, label:'Todo1'}, {id: 2, label: 'Todo2'}])
  return (
    <>
    <TodoList todos={todos}/>
    <input type ="text"></input>
    <button>Add Todo</button>
    <button>Clear Completed</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;
