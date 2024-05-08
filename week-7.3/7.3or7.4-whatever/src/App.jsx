import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue,  } from 'recoil'
import { allNetworkAtom,  totalNoti } from './atoms/atoms'

function App() {
  

  return (
   <RecoilRoot>
    <MainApp/>
   </RecoilRoot>
  )
}

function MainApp() {
 const [notificationCount,setNotificationCount]= useRecoilState(allNetworkAtom);
 const totalSum = useRecoilValue(totalNoti)

  return (
  <div>
  

      <button>Home</button>
      <button>My Network{notificationCount.network >= 100 ? "99+" : notificationCount.network}</button>
      <button>Jobs({notificationCount.jobs >= 100 ? "99+" : notificationCount.jobs})</button>
      <button >Messages({notificationCount.messaging >= 100 ? "99+" : notificationCount.messaging})</button>
      <button>Notification({notificationCount.notifications >= 100 ? "99+" : notificationCount.notifications})</button>
      <button>Me ({ totalSum })</button>

    
  </div>
  )
}

export default App
