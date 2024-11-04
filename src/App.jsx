
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'


function App() {


//make Home 


  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>

        
      </Routes>
    </>
  )
}

export default App
