
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import ArticlePage from './components/ArticlePage'
import Topics from './components/Topics'
import SortProvider from './components/SortProvider'
import NotFoundPage from './components/NotFoundPage'


function App() {

  return (
    <>
      <Header/>
      <SortProvider/>
      <Routes>                
        <Route path='/topics/' element={<Topics/>}/>
        <Route path='/article/:article_id' element={<ArticlePage/>}/>
        <Route path='/*' element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default App
