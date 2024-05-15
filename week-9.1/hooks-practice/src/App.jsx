import { useEffect, useState } from 'react'
import axios from 'axios'

function useInterval(fn, timeout) {


useEffect(()=>{

  setInterval(()=>{
    fn()
  }, timeout)

},[])
 

}

function App() {

  const [count, setCount] = useState(0)

  useInterval(() => {
    setCount(count => count+ 1)
  }, 1000)

  return <div>
    Timer Count is {count}
  </div>
}



export default App