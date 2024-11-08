import React, { useEffect, useState } from 'react'
import { getCommentsByArticleID } from '../utils/api-requests'
import Loading from './Loading'
import ErrorHandling from './ErrorHandling'
import CommentCards from './CommentCards'
import PostComment from './PostComment'
import { ToastContainer, toast } from 'react-toastify'


function Comments({article_id}) {
    const [comments, setComments] = useState([])
    const [commentsChanged, setCommentsChanged] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [commentDeleted, setCommentDeleted] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        getCommentsByArticleID(article_id)
        .then((comments)=> {
            setComments(comments)
            setIsLoading(false)
            setError(null)
            if(commentDeleted){
                toast("Your comment has been deleted")
            }
            if(commentsChanged){
                toast("Your comment has been posted")
            }

        })
        .catch((error)=>{
            console.log(error)
            setError(error)
            setIsLoading(false)
            setCommentsChanged(false)
        }
        )
    },[article_id, commentsChanged, commentDeleted])

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
    
    <PostComment article_id={article_id} setCommentsChanged={setCommentsChanged} setCommentDeleted={setCommentDeleted}/>
    <CommentCards comments={comments} setCommentDeleted={setCommentDeleted} setCommentsChanged={setCommentsChanged}/>
    <ToastContainer/>

</section>
)
}

export default Comments