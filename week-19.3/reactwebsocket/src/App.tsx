import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)
  const [msg, setMsg] = useState("")
  const [lastestmsg, setLatestmsg] = useState("")

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080')
    socket.onopen = () => {
      console.log("hi there from effect")
      setSocket(socket)
    }
    socket.onmessage = (message) => {
      console.log('recieved message :', message.data)
      setLatestmsg(message.data)
    }
    return ()=>{
      socket.close()
    }

  }, [])

  if (!socket) {
    return <div>
      connecting to socket
    </div>
  }

  return (
    <>
      <input type="text" onChange={(e) => {
        setMsg(e.target.value)
      }} />
      <button onClick={()=>socket.send(msg)}>send</button>

      {lastestmsg}
    </>
  )
}

export default App
