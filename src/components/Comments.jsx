import React, { useEffect, useState } from 'react'
import { getCommentsByArticleID } from '../utils/api-requests'
import Loading from './Loading'
import ErrorHandling from './ErrorHandling'
import CommentCards from './CommentCards'
import PostComment from './PostComment'

function Comments({article_id}) {
    const [comments, setComments] = useState([])
    const [commentPosted, setCommentPosted] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setIsLoading(true)
        getCommentsByArticleID(article_id)
        .then((comments)=> {
            setComments(comments)
            setIsLoading(false)
            setError(null)
            setCommentPosted(false)
        })
        .catch((error)=>{
            console.log(error)
            setError(error)
            setIsLoading(false)
        }
        )
    },[article_id, commentPosted])

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
    <PostComment article_id={article_id} setCommentPosted={setCommentPosted}/>
    <CommentCards comments={comments}/>
</section>
)
}

export default Comments