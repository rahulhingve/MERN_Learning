import { useState ,lazy, Suspense} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Dashboard } from '../components/Dashboard'
import {BrowserRouter,Link,Route,Routes,useNavigate} from 'react-router-dom'
// import { Landing } from '../components/Landing'
const Dashboard = lazy(()=> import ('../components/Dashboard'))
const Landing = lazy(()=> import('../components/Landing'))
function App() {
  
  return (
    <div>

    
    
    <BrowserRouter>
    <TopBar />
      <Routes>
        <Route  path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
        <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
function TopBar(){
  const navigate = useNavigate();

  return <div>
    <div style={{background:"pink" , color:"white"}}>
      
      <button onClick={()=>{
          navigate("/");
      }} >
        Landing
      </button>
      <button onClick={()=>{
       navigate("/dashboard");
      }}>
        Dashboard
      </button>
      
    </div>
  </div>
}

export default App
