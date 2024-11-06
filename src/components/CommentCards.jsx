import CommentCard from "./CommentCard"

function CommentCards({comments, setCommentDeleted}) {
    
  return (
    <ul className="article_list">
        {comments.map((comment)=>{
        return <CommentCard comment={comment} key={comment.comment_id} setCommentDeleted={setCommentDeleted}/>
    })}
    </ul>
  )
}

export default CommentCards