
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ArticlePage from './components/ArticlePage'
import TopicPage from './components/TopicPage'
import Topics from './components/Topics'


function App() {


//make Home 


  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/article/:article_id' element={<ArticlePage/>}/>        
        <Route path='/topics/' element={<Topics/>}/>        
        <Route path='/topics/:topic_slug' element={<TopicPage/>}/>        
      </Routes>
    </>
  )
}

export default App
