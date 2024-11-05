import { useEffect, useState } from "react"
import { setVotes } from "../utils/api-requests"


function Votes({votes, id, articlesOrComments}) {

    const[currentVotes, setCurrentVotes] = useState(votes)
    const[upVoteDisabled, setUpVoteDisabled] = useState(false)
    const[downVoteDisabled, setDownVoteDisabled] = useState(false)
    const[error, setError] = useState(null)

    useEffect(()=> {
        setVotes(id, articlesOrComments, 0)
        .then((votes)=> {
            setCurrentVotes(votes)
        })
    }, [])

function handelUpVote(){
    setCurrentVotes( currentVotes + 1)
    setUpVoteDisabled(true)
    setDownVoteDisabled(false)
    setVotes(id, articlesOrComments, 1).then(()=> {
        setError(null)
    })
    .catch((error) => {
    setError(error)    
    setUpVoteDisabled(false)
    setCurrentVotes(currentVotes)   
    })
}

function handelDownVote(){
    setCurrentVotes( currentVotes - 1)
    setUpVoteDisabled(false)
    setDownVoteDisabled(true)
    setVotes(id, articlesOrComments, -1)
    .catch((error) => {
        setError(error)    
        setDownVoteDisabled(false)
        setCurrentVotes(currentVotes)
})
}

  return (
      <div><h4>Votes: {currentVotes}</h4>      
    <button onClick={handelUpVote} disabled={upVoteDisabled}>+1</button>
    <button onClick={handelDownVote} disabled={downVoteDisabled}>-1</button>
    {error? <p>Your vote was not successful please try again</p>: null}
    </div>
  )
}

export default Votes