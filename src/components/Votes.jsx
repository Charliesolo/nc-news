import { useEffect, useState } from "react"
import { setVotes } from "../utils/api-requests"


function Votes({votes, id, articlesOrComments}) {

    const[currentVotes, setCurrentVotes] = useState(votes)
    const[upVoteClicked, setUpVoteClicked] = useState(false)
    const[downVoteClicked, setDownVoteClicked] = useState(false)
    const[upVoteClass, setUpVoteClass] = useState('notClicked')
    const[downVoteClass, setDownVoteClass] = useState('notClicked')
    const[error, setError] = useState(null)

function handleUpVote(){
    let voteChange = 1
    if(downVoteClicked){
        voteChange= 2
        setDownVoteClicked(false)
        setDownVoteClass('notClicked') 
    }
    if(upVoteClicked){
        voteChange = -1
        setUpVoteClicked(false)
        setUpVoteClass('notClicked')
    }
    setCurrentVotes( currentVotes + voteChange)
    if(upVoteClicked){
        setUpVoteClicked(false)
        setUpVoteClass('notClicked')       
    }
    else{
        setUpVoteClicked(true)
        setUpVoteClass('clicked')
    }
    setVotes(id, articlesOrComments, voteChange).then(()=> {
        setError(null)
    })
    .catch((error) => {
    setError(error) 
    setCurrentVotes(currentVotes)   
    })    
}

function handleDownVote(){
    let voteChange = -1
    if(upVoteClicked){
        voteChange= -2
        setUpVoteClicked(false)
        setUpVoteClass('notClicked') 
    }
    if(downVoteClicked){
        voteChange = 1
        setDownVoteClicked(false)
        setDownVoteClass('notClicked')
    }
    setCurrentVotes( currentVotes + voteChange)
    if(downVoteClicked){
        setDownVoteClicked(false)
        setDownVoteClass('notClicked')       
    }
    else{
        setDownVoteClicked(true)
        setDownVoteClass('clicked')
    }
    setVotes(id, articlesOrComments, voteChange).then(()=> {
        setError(null)
    })
    .catch((error) => {
    setError(error) 
    setCurrentVotes(currentVotes)   
    })    
}

  return (
      <div><h4>Votes: {currentVotes}</h4>      
    <button onClick={handleUpVote} className={upVoteClass} >+1</button>
    <button onClick={handleDownVote} className={downVoteClass} >-1</button>
    {error? <p>Your vote was not successful please try again</p>: null}
    </div>
  )
}

export default Votes