import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SecondCard } from './components/SecondCard'
import { SideBar } from './components/SideBar'

function App() {
  return <div>


    <div className='grid grid-cols-4'>
      <SideBar />
      <SecondCard />
    </div>
  </div>


}

export default App
