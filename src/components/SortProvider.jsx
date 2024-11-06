import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import TopicPage from './TopicPage'
import { useState } from 'react'

function SortProvider() {


    const [articlesToBrowse, setArticlesToBrowse] = useState([])
    const [sortBy, setSortBy] = useState("created_at")
    const [order, setOrder] = useState("desc")
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)


  return (
    <Routes>
            <Route path="/" 
            element={<Home
                articlesToBrowse={articlesToBrowse}
                setArticlesToBrowse={setArticlesToBrowse}
                sortBy={sortBy}
                setSortBy={setSortBy}
                order={order}
                setOrder={setOrder}
                limit={limit}
                setLimit={setLimit}
                page={page}
                setPage={setPage}
                
            />}/>
            <Route path='/topics/:topic_slug' 
            element={<TopicPage
                articlesToBrowse={articlesToBrowse}
                setArticlesToBrowse={setArticlesToBrowse}
                sortBy={sortBy}
                setSortBy={setSortBy}
                order={order}
                setOrder={setOrder}
                limit={limit}
                setLimit={setLimit}
                page={page}
                setPage={setPage}            
            />}/>  
    </Routes>
  )
}

export default SortProvider