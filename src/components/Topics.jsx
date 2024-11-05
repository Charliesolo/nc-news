import{ useEffect, useState } from 'react'
import ErrorHandling from './ErrorHandling'
import Loading from './Loading'
import { getAllTopics } from '../utils/api-requests'
import TopicCards from './TopicCards'


function Topics() {
    const[topicArray, setTopicArray] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=> {
        getAllTopics()
        .then((response) => {
            setIsLoading(false)
            setTopicArray(response)
            setError(null)
        })
        .catch((err) => {
            setError(err)
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
    <TopicCards topicArray={topicArray}/>
  )
}

export default Topics