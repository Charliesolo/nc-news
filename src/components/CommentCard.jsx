import Votes from "./Votes"

function CommentCard({comment}) {
  return (    
    <li className='card' > 
        <h3 >{comment.author}</h3>
        <p> {comment.body}</p>
        <p >{comment.created_at}</p>
        <Votes votes={comment.votes} id={comment.comment_id} articlesOrComments='comments'/>
    </li>
  )
}

export default CommentCard