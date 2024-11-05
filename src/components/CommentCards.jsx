import CommentCard from "./CommentCard"

function CommentCards({comments, setCommentsChanged}) {
    
  return (
    <ul className="article_list">
        {comments.map((comment)=>{
        return <CommentCard comment={comment} key={comment.comment_id} setCommentsChanged={setCommentsChanged}/>
    })}
    </ul>
  )
}

export default CommentCards