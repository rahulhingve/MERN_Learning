import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './component/context'

function App() {
const [count,setCount]=useState(0);

  return (
    <div>
      <CountContext.Provider value={count}>
      <Count count={count} setCount={setCount}/>
      </CountContext.Provider>
    </div>
  )
}
function Count({setCount}){
return <div>
  
  <CountRenderer />
  <Buttons  setCount={setCount} />
</div>
}
function CountRenderer(){

  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({setCount}){
  const count = useContext(CountContext);
  return <div>
    <button onClick={()=>{
      setCount(count+1);
    }}>
      Increase
    </button>
    <button onClick={()=>{
      setCount(count-1);
    }}>
      Decrease
    </button>
  </div>
}
export default App
