import React, { useEffect, useState } from 'react'
import { getArticles } from '../utils/api-requests'
import ArticleCards from './ArticleCards'

function Home() {
    const [articlesToBrowse, setArticlesToBrowse] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

useEffect(()=>{
    setIsLoading(true)
    getArticles().then(({articles}) => {      
        setArticlesToBrowse(articles)
        setIsLoading(false)
        setError(null)
    })
    .catch((error) => {
        setError(error)
    })
}, [])

if(isLoading){
    return(
        <p>Loading...</p>
    )
}

if(error){
    
}

  return (
    <ArticleCards articlesToBrowse={articlesToBrowse}/>    
  )
}

export default Home