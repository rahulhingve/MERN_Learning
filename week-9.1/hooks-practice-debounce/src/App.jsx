import { useEffect, useState } from 'react'
import axios from 'axios'

function useDebounce(value, intervel) {

  const [search, setSearch] = useState(value)

  useEffect(() => {

   let current =  setTimeout(() => {

      setSearch(value)

    }, intervel)

    return ()=>{
      clearTimeout(current)
    }

  }, [value])

  
return search

}

function App() {

  const [search, setSearch] = useState("")
  const deBounceValue = useDebounce(search, 1000)
  return <div>

    {deBounceValue}

    <input type="text" onChange={e => {
      setSearch(e.target.value)
    }} />
  </div>
}



export default App