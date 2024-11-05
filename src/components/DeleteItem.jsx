import { useEffect, useState } from "react"
import { deleteItem } from "../utils/api-requests"
import Loading from "./Loading"
import ErrorHandling from "./ErrorHandling"

function DeleteItem({id, articlesOrComments, setCommentsChanged, setArticlesChanged}) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  
  function handleClick(){
    setIsLoading(true)
    deleteItem(id, articlesOrComments).then(()=>{
      setIsLoading(false)
      setError(null)
      setCommentsChanged(true)
      setArticlesChanged(true)
    }
    )
    .catch((err) => {
      setError(err)
      setIsLoading(false)
    })

    if(isLoading){
      return(
          <Loading/>
      )
  }
  }
  
  return (
    <>
    <button onClick={handleClick}>Delete</button>
    {error? <p>That didn't work please try again</p>: null}
    </>
  )
}

export default DeleteItem