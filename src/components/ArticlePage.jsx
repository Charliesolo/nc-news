import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleByID } from "../utils/api-requests";


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
            setError(error)
            setIsLoading(false)
        })
    }, [])

    if(isLoading){
        return(
            <p>Loading...</p>
        )
    }
    
    if(error){
        
    }

    

    


return (
    <div className="article">
        <h2>{articleObj.title}</h2>
        <h3>{articleObj.topic}</h3>
        <h3>{articleObj.author}</h3>
        <img src={articleObj.article_img_url} alt=""/>
        <p>{articleObj.body}</p>
        <p>Votes: {articleObj.votes}</p>        
    </div>
)
}

export default ArticlePage