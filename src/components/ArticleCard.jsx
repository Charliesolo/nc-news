import { Link } from "react-router-dom"
import Votes from "./Votes"

function ArticleCard({article}) {
  return (
    <li className='card'> 
    <Link to={`/article/${article.article_id}`}> 
    <h2>{article.title}</h2> 
    <img className='thumbnail' src={article.article_img_url} />
  <p>Comments: {article.comment_count}</p>
    </Link>      
  <h4>User: {article.author}</h4>
  <h3>{article.topic}</h3>
  <Votes votes={article.votes} id={article.article_id} articlesOrComments='articles'/>     
  </li>
  )
}

export default ArticleCard