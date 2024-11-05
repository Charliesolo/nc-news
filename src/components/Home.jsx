import React, { useEffect, useState } from 'react'
import { getArticles } from '../utils/api-requests'
import ArticleCards from './ArticleCards'
import ErrorHandling from './ErrorHandling'
import Loading from './Loading'

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
        setIsLoading(false)
    })
}, [])

if(isLoading){
    return(
        <Loading/>
    )
}

if(error){
    return(
            <ErrorHandling error={error}/>
        )
}

  return (
    <ArticleCards articlesToBrowse={articlesToBrowse} />    
  )
}

export default Home