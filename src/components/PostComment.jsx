import { useContext, useEffect, useState } from "react"
import Loading from "./Loading"
import ErrorHandling from "./ErrorHandling"
import { CurrentUserContext } from "../contexts/current-user"
import { postComment } from "../utils/api-requests"
import { toast } from "react-toastify"


function PostComment({article_id, setCommentsChanged, setCommentDeleted}) {
    const [commentText, setCommentText] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const {currentUser} = useContext(CurrentUserContext)
    const [emptyComment, setEmptyComment] = useState(false)


useEffect(()=>{
    setIsLoading(false)
}, [])

function handleCommentChange(event){
    setCommentText(event.target.value)
}

function handleSubmit(event){
    if(commentText.length === 0){
        setEmptyComment(true)
        return
    } 
    setEmptyComment(false)
    setCommentsChanged(false)
    setCommentDeleted(false)
    setIsLoading(true)
    event.preventDefault()
    postComment(article_id, currentUser,commentText )
    .then((response) => {
        setIsLoading(false)
        setError(null)
        setCommentText("")
        setCommentsChanged(true)
        setCommentDeleted(false)

    }).catch((err) => {
        setError(err)
        setIsLoading(false)
    })

}

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
    <div className="container">
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="comment">Have your say:</label>
            <div>       
                <textarea required={true} className='box' id='comment' type="text" value={commentText} onChange={handleCommentChange}/>
            </div> 
            <button onClick={handleSubmit}>Submit</button>
            <br />
            {emptyComment? <p>Please write your comment</p> : null}
    </form>
    </div>
  )
}

export default PostComment