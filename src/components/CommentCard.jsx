function CommentCard({comment}) {
    console.log(comment)
  return (
    <li className="card">
        <h3>{comment.author}</h3>
        <p>{comment.body}</p>
        <p>{comment.created_at}</p>
        <p>Votes: {comment.votes}</p>
    </li>
  )
}

export default CommentCard