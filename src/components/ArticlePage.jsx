import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleByID } from "../utils/api-requests";
import ErrorHandling from "./ErrorHandling";
import Loading from "./Loading";
import Comments from "./Comments";
import Votes from "./Votes";


function ArticlePage() {
    const {article_id} = useParams()
    const [articleObj, setArticleObj] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        window.scrollTo(0,0)
        setIsLoading(true)        
        getArticleByID(article_id)
        .then((article) => {
            setArticleObj(article)            
            setIsLoading(false)
            setError(null)
        })
        .catch((error)=>{
            console.log(error)
            setError(error)
            setIsLoading(false)
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
    <>
    <div className="article">
        <h2>{articleObj.title}</h2>
        <h3>{articleObj.topic}</h3>
        <h3>{articleObj.author}</h3>
        <h4>{articleObj.created_at}</h4>
        <img src={articleObj.article_img_url} alt=""/>
        <p>{articleObj.body}</p>
        <Votes votes={articleObj.votes} id={articleObj.article_id} articlesOrComments='articles'/>       
    </div>
    <Comments article_id={article_id}/>
    </>
)
}

export default ArticlePage