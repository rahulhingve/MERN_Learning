import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

const [counts , setCounts]=useState(0);
const [inputVlaue ,setINputValue]=useState(1);

let count = 0;
for (let i=0; i<=inputVlaue; i++){
  count = count+i;
}

return <div>
  <input type="text" onChange={(e)=>{
    setINputValue(e.target.value)
  }}/>
  <p>count from 1 to {inputVlaue} is {count}</p>
  <button onClick={()=>{
       
        setCounts(counts+1)
      
  }}>Counter ({counts})</button>
</div>

}
export default App
