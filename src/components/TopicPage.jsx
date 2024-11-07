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
    let [searchParams, setSearchParams] = useSearchParams()
    const [sortBy, setSortBy] = useState("created_at")
    const [order, setOrder] = useState("desc")
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)

    let queries = [...searchParams]

    function processURL(queries){
        if(queries.length === 0){return}
        setSortBy(queries[0][1])
        setOrder(queries[1][1])
        setLimit(queries[2][1])
        setPage(queries[3][1])        
    }

    useEffect(() => {
        setIsLoading(true)
        getArticles(topic_slug, sortBy, order, limit, page).then(({articles}) => {      
            setArticlesToBrowse(articles)
            setIsLoading(false)
            setError(null)
            setSearchParams(`sorted_by=${sortBy}&order=${order}&limit=${limit}&p=${page}`)       
        })
        .catch((error) => {
            setError(error)
            setIsLoading(false)
        })
    }, [sortBy, order, limit, page])

        useEffect(()=>{processURL(queries)}, [])

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