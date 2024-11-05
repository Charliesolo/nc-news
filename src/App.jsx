
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ArticlePage from './components/ArticlePage'


function App() {


//make Home 


  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/article/:article_id' element={<ArticlePage/>}/>        
      </Routes>
    </>
  )
}

export default App
