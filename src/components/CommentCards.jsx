import CommentCard from "./CommentCard"

function CommentCards({comments, setCommentDeleted, setCommentsChanged}) {
    
  return (
    <ul className="article_list">
        {comments.map((comment)=>{
        return <CommentCard comment={comment} key={comment.comment_id} setCommentDeleted={setCommentDeleted} setCommentsChanged={setCommentsChanged}/>
    })}
    </ul>
  )
}

export default CommentCards