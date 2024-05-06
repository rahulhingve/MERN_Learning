import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue,  } from 'recoil'
import { countAll, jobsAtom, messagingAtom, networkAtom, notificationAtom } from './atoms/atoms'

function App() {
  

  return (
   <RecoilRoot>
    <MainApp/>
   </RecoilRoot>
  )
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const [messageCount,setMessageCount] = useRecoilState(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const totalCount = useRecoilValue(countAll)
  return (
  <div>
  

      <button>Home</button>
      <button>My Network{networkNotificationCount >= 100 ? "99+" : networkNotificationCount}</button>
      <button>Jobs({jobsNotificationCount >= 100 ? "99+" : jobsNotificationCount})</button>
      <button onClick={()=>{
        setMessageCount(messageCount+1);
      }}>Messages({messageCount >= 100 ? "99+" : messageCount})</button>
      <button>Notification({notificationCount >= 100 ? "99+" : notificationCount})</button>
      <button>Me ({ totalCount })</button>

    
  </div>
  )
}

export default App
