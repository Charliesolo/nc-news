import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import TopicPage from './TopicPage'
import { useState } from 'react'
import NotFoundPage from './NotFoundPage'
import Topics from './Topics'
import ArticlePage from './ArticlePage'
import PostArticle from './PostArticle'

function RoutesComponent() {

    const [articlesToBrowse, setArticlesToBrowse] = useState([])

  return (
    <Routes>
            <Route path="/" 
            element={<Home
                articlesToBrowse={articlesToBrowse}
                setArticlesToBrowse={setArticlesToBrowse}                
            />}/>
            <Route path='/topics/' element={<Topics/>}/>
            <Route path='/topics/:topic_slug' 
            element={<TopicPage
                articlesToBrowse={articlesToBrowse}
                setArticlesToBrowse={setArticlesToBrowse}                      
            />}/> 
        <Route path='/article/:article_id' element={<ArticlePage/>}/>
        <Route path='/article/post' element={<PostArticle/>}/>
        <Route path='/*' element={<NotFoundPage/>}/> 
    </Routes>
  )
}

export default RoutesComponent