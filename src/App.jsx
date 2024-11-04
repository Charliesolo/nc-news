import { useContext, } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CurrentUserContext } from './contexts/current-user'

function App() {

  const {currentUser} = useContext(CurrentUserContext)



  return (
    <>
      <h1>NC News</h1>
      <h2>{currentUser}</h2>
    </>
  )
}

export default App
