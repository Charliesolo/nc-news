import { useContext, useEffect, useState } from "react"
import Loading from "./Loading"
import ErrorHandling from "./ErrorHandling"
import { CurrentUserContext } from "../contexts/current-user"
import { postComment } from "../utils/api-requests"


function PostComment({article_id, setCommentsChanged}) {
    const [commentText, setCommentText] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const {currentUser} = useContext(CurrentUserContext)


useEffect(()=>{
    setIsLoading(false)
}, [])

function handleCommentChange(event){
    setCommentText(event.target.value)
}

function handleSubmit(event){
    setIsLoading(true)
    event.preventDefault()
    postComment(article_id, currentUser,commentText )
    .then((response) => {
        setIsLoading(false)
        setError(null)
        setCommentText("")
        setCommentsChanged(true)

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
                <textarea  className='box' id='comment' type="text" value={commentText} onChange={handleCommentChange}/>
            </div> 
            <button onClick={handleSubmit}>Submit</button>
            <br />
    </form>
    </div>
  )
}

export default PostComment