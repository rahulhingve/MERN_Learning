import { useState } from 'react'




function App() {
const [todos, setTodos]= useState([]);

  function addTodo() {
    let newTodo =[];
    for (let i=0; i<todos.length;i++) {
      newTodo.push(todos[i])
    }
    newTodo.push({
      title: "helo",
      description: "do something"
    })
    setTodos(newTodo)
  }


  return (
    <div>

<button onClick={addTodo}>ADD TODO</button>
{todos.map(function(todo){
  return <Todo title={todo.title} description={todo.description}/>
})}
  <DarkNewTodos todos ={todos}/>
      {/* <CustomButtonsforme count={ count } setCount={setCount}></CustomButtonsforme> */}
    </div>
  )
}

function DarkNewTodos(props){
  return <div>
    {props.todos.map(function(todo){
      return <div style={{background:"black" , color:"white"}}> 
      <Todo title={todo.title} description={todo.description}/>
      </div>
    })}
  </div>
}
function Todo (props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}


// function CustomButtonsforme(props){

//   function onClickhandler(){
//     props.setCount(props.count +1);
//   }
//   return <button onClick={onClickhandler}>
//     Counter {props.count}
//     </button>
// }

export default App
