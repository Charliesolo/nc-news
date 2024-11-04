import React from 'react'

function ArticleCards({articlesToBrowse}) {
  return (
    <div>
      <ul>
      {articlesToBrowse.map((article) => {
      return <li className='card' key={article.article_id}> 
      <h2>{article.title}</h2>
      <h3>{article.author}</h3>
      <h3>{article.topic}</h3>
      <img className='thumbnail' src={article.article_img_url} />
      <p>Comments: {article.comment_count}</p>
      <p>Votes: {article.votes}</p>
      </li>
    })}
      </ul>
    </div>

  )
}

export default ArticleCards