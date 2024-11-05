import React, { useEffect, useState } from 'react'
import { getCommentsByArticleID } from '../utils/api-requests'
import Loading from './Loading'
import ErrorHandling from './ErrorHandling'
import CommentCards from './CommentCards'

function Comments({article_id}) {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setIsLoading(true)
        getCommentsByArticleID(article_id)
        .then((comments)=> {
            setComments(comments)
            setIsLoading(false)
            setError(null)
        })
        .catch((error)=>{
            console.log(error)
            setError(error)
            setIsLoading(false)
        }
        )
    },[article_id])

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
    <CommentCards comments={comments}/>
</section>
)
}

export default Comments