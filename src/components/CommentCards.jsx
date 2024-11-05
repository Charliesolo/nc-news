import CommentCard from "./CommentCard"

function CommentCards({comments}) {
    
  return (
    <ul className="article_list">
        {comments.map((comment)=>{
        return <CommentCard comment={comment} key={comment.comment_id}/>
    })}
    </ul>
  )
}

export default CommentCards