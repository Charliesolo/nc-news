import { useParams } from "react-router-dom"
import { getArticles } from "../utils/api-requests"
import { useEffect, useState } from "react"
import Loading from "./Loading"
import ErrorHandling from "./ErrorHandling"
import ArticleCards from "./ArticleCards"

function TopicPage() {
    const {topic_slug} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [articlesByTopic, setArticlesByTopic] = useState([])

    useEffect(() => {
        getArticles(topic_slug)
        .then((response) => {
            setIsLoading(false)
            setError(null)
            setArticlesByTopic(response.articles)
        })
        .catch((err) => {
            setIsLoading(false)
            setError(err)
        })
    }, [])

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
    <ArticleCards articlesToBrowse={articlesByTopic}/>
  )
}

export default TopicPage