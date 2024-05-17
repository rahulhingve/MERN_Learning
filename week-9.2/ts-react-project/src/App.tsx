import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <Todo title="gym" des="ja" done={false} />
    </>
  )
}
interface Props {
  title:string,
  des:string,
  done:boolean
}


function Todo(props:Props){
  return <div>
    <h1>
      {props.title}
    </h1>
    <h2>
      {props.des}
    </h2>
    <h2>
      {props.done}
    </h2>
  </div>
}
export default App
