import { useState } from "react"
import { deleteItem } from "../utils/api-requests"
import Loading from "./Loading"


function DeleteItem({id, articlesOrComments, setCommentDeleted, setCommentsChanged}) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  
  function handleClick(){    

    setCommentDeleted(false)
    setCommentsChanged(false)
    setIsLoading(true)
    deleteItem(id, articlesOrComments).then(()=>{
      setIsLoading(false)
      setError(null)
      setCommentDeleted(true)
      scrollTo({top:500, behavior: "smooth"})

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