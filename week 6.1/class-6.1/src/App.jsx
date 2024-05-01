import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
function App() {
//  const [header, setHeader] = useState("")
const [title ,setTitle] = useState("rahul")
// const [title2 ,setTitle2] = useState("second name ")

function updateTitile(){
  setTitle("My name is "+ Math.random()) ;
}
  return (
    <div>
      <button onClick={updateTitile}>clck on this</button>
      <Header title={title}/>
     
      <Header title="kya hai hai"/>
      <Header title="kya hai hai"/>
      <Header title="kya hai hai"/>
     

    </div>
  )
}


const Header = React.memo(function Header(props){
  return  <div>
    {props.title}
  </div>
})



export default App
