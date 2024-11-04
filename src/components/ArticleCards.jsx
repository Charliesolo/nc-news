import { Link } from "react-router-dom"


function ArticleCards({articlesToBrowse}) {

  
  
  return (
          
      <ul className="article_list">
      {articlesToBrowse.map((article) => {
      return <li className='card' key={article.article_id}> 
        <Link to={`/article/${article.article_id}`}> 
        <h2>{article.title}</h2> 
        <img className='thumbnail' src={article.article_img_url} />
      <p>Comments: {article.comment_count}</p>
        </Link>      
      <h4>User: {article.author}</h4>
      <h3>{article.topic}</h3>
      <p>Votes: {article.votes}</p>
      </li>
    })}
      </ul>
    

  )
}

export default ArticleCards