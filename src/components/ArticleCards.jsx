
import ArticleCard from "./ArticleCard"


function ArticleCards({articlesToBrowse}) {

  ArticleCard
  
  return (
          
      <ul className="article_list">
      {articlesToBrowse.map((article) => {
      return <ArticleCard article={article} key={article.article_id}/>
    })}
      </ul>
    

  )
}

export default ArticleCards