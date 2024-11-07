import { useContext, useEffect, useState } from "react"
import { CurrentUserContext } from "../contexts/current-user"
import Loading from "./Loading"
import ErrorHandling from "./ErrorHandling"
import { getAllTopics, postArticle } from "../utils/api-requests"
import TopicDropdown from "./TopicDropdown"
import { useNavigate } from "react-router-dom"


function PostArticle() {
    const {currentUser} = useContext(CurrentUserContext)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [topicArray, setTopicArray] = useState([])
    const [missingFields, setMissingFields] = useState(false)
    const [titleInput, setTitleInput] = useState("")
    const [bodyInput, setBodyInput] = useState("")
    const [topicInput, setTopicInput] =useState("coding")
    const [urlInput, setUrlInput] =useState("coding")
    const navigator = useNavigate()

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

    function handleSubmit(event){
        event.preventDefault()
        setMissingFields(false)
        setIsLoading(true)
        if(!titleInput|| !bodyInput){
            setIsLoading(false)
            setMissingFields(true)
            return
        }
        postArticle(currentUser, titleInput, bodyInput, topicInput, urlInput)
        .then((response) => {
            setIsLoading(false)
            setTitleInput("")
            setBodyInput("")
            setTopicInput("coding")
            setUrlInput("")
            navigator(`/article/${response.article_id}`)            
        })
        .catch((err) => {
            setError(err)
            setIsLoading(false)
        })

    }

    function handleTitleChange(event){
        setTitleInput(event.target.value)
    }

    function handleBodyChange(event){
        setBodyInput(event.target.value)
    }

    function handleTopicChange(event){
        setTopicInput(event.target.value)
    }

    function handleUrlChange(event){
        setUrlInput(event.target.value)
    }
    
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
    <section className="form-container">
        <form action="" onSubmit={handleSubmit}>
            <legend>Post An Article</legend>
            <br />
            <label htmlFor="title">Title:* </label>
            <br />
            <input id="title" type="text" onChange={handleTitleChange}/>
            <br />
            <label htmlFor="body">Article Body:* </label>
            <br />
            <textarea required={true} className='box' id='body' type="text" onChange={handleBodyChange} />
            <br />
            <label htmlFor="topic">Topic:* </label>
            <br />
            <select id="topic" onChange={handleTopicChange} value={topicInput}>
                {topicArray.map((topic) => {
                    return <TopicDropdown key={topic.slug} topic={topic}/>
                })}
            </select>
            <br />
            <label htmlFor="article_url">Article Image URL: </label>
            <br />
            <input type="text" id="article_url" onChange={handleUrlChange}/>
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </form>
        <p>* Required Fields</p>
        {missingFields? <p>Please ensure all required fields are filled out</p>: null}
    </section>
  )
}

export default PostArticle