import { useState } from "react"


function App() {

const [todos ,setTodos] = useState("")

return <div>
  <GetTodos />
</div>


}

function GetTodos(){
  return <div>
    <input type="text" placeholder="Input Title" /> <br />
    <input type="text" placeholder="Input Description" /> <br />
    <button>Add Todo</button>
  </div>
}


export default App
