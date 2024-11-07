import { useParams } from "react-router-dom"
import { getArticles } from "../utils/api-requests"
import { useEffect, useState } from "react"
import Loading from "./Loading"
import ErrorHandling from "./ErrorHandling"
import ArticleCards from "./ArticleCards"
import { useSearchParams } from 'react-router-dom'
import SortBar from "./SortBar"
import PageNav from "./PageNav"

function TopicPage({articlesToBrowse, setArticlesToBrowse }) {
    const {topic_slug} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const [sortBy, setSortBy] = useState(searchParams.get("sorted_by")|| "created_at")
    const [order, setOrder] = useState(searchParams.get("order")||"desc")
    const [limit, setLimit] = useState(Number(searchParams.get("limit")|| 5))
    const [page, setPage] = useState(Number(searchParams.get("p") || 1))

    useEffect(()=>{
        setIsLoading(true)
        setError(null)    
        getArticles(topic_slug, sortBy, order, limit, page).then(({articles}) => {      
            setArticlesToBrowse(articles)
            setIsLoading(false)
            setError(null)
            setSearchParams(`sorted_by=${sortBy}&order=${order}&limit=${limit}&p=${page}`)
        })
        .catch((error) => {
            setPage(1)
            setError(error)
            setIsLoading(false)
        })
    }, [sortBy, order, limit, page])

    if(isLoading){
        return(
            <Loading/>
        )
    }
    
    if(error){
        return(
                <ErrorHandling error={error}/>
            )
    }   
    
  return (
    <section>
        <SortBar 
        setSortBy={setSortBy} 
        sortBy={sortBy} 
        setOrder={setOrder} 
        order={order}
        limit={limit}
        setLimit={setLimit}/>
        <ArticleCards articlesToBrowse={articlesToBrowse} />  
        <PageNav
        page={page}
        setPage={setPage}
        limit={limit}
        numOfArticles = {articlesToBrowse[0].total_count}/>
    </section>

  )
}

export default TopicPage