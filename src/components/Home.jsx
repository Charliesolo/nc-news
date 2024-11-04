import React, { useEffect, useState } from 'react'
import { getAllArticles } from '../utils/api-requests'
import ArticleCards from './ArticleCards'

function Home() {
    const [articlesToBrowse, setArticlesToBrowse] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

useEffect(()=>{
    setIsLoading(true)
    getAllArticles().then(({articles}) => {      
        setArticlesToBrowse(articles)
        setIsLoading(false)
        setError(null)
    })
    .catch((error) => {
        setError(error)
    })

}, [])

  return (
    <>
    <ul className='article_list'>
    <ArticleCards articlesToBrowse={articlesToBrowse}/>
    </ul>
    </>
  )
}

export default Home