import Votes from "./Votes"
import { CurrentUserContext } from "../contexts/current-user"
import { useContext } from "react"
import DeleteItem from "./DeleteItem"

function CommentCard({comment, setCommentsChanged}) {

  const {currentUser} = useContext(CurrentUserContext)

  return (    
    <li className='card' > 
        <h3 >{comment.author}</h3>
        <p> {comment.body}</p>
        <p >{comment.created_at}</p>
        <Votes votes={comment.votes} id={comment.comment_id} articlesOrComments='comments'/>
        {currentUser === comment.author? <DeleteItem id={comment.comment_id} articlesOrComments = 'comments' setCommentsChanged={setCommentsChanged} /> : null}
    </li>
  )
}

export default CommentCard