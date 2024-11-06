import { useEffect, useState } from "react"
import { setVotes } from "../utils/api-requests"


function Votes({votes, id, articlesOrComments}) {

    const[currentVotes, setCurrentVotes] = useState(votes)
    const[upVoteClicked, setUpVoteClicked] = useState(false)
    const[downVoteClicked, setDownVoteClicked] = useState(false)
    const[upVoteClass, setUpVoteClass] = useState('notClicked')
    const[downVoteClass, setDownVoteClass] = useState('notClicked')
    const[error, setError] = useState(null)

    useEffect(()=> {
        if(upVoteClicked){setUpVoteClass('clicked')}
        else {setUpVoteClass('notClicked')}
        if(downVoteClicked){setDownVoteClass('clicked')}
        else {setDownVoteClass('notClicked')}
        setVotes(id, articlesOrComments, 0)
        .then((votes)=> {
            setCurrentVotes(votes)
        })
    }, [currentVotes ])

function handelUpVote(){
    if(downVoteClicked){
        handelDownVote()
    }
    if(upVoteClicked){
        setCurrentVotes( currentVotes - 1)
        setUpVoteClicked(false)
        setVotes(id, articlesOrComments, -1).then(()=> {
            setError(null)
        })
        .catch((error) => {
        setError(error) 
        setCurrentVotes(currentVotes)   
        })
    }
    else {
        setCurrentVotes( currentVotes + 1)
        setUpVoteClicked(true)
        setVotes(id, articlesOrComments, 1).then(()=> {
            setError(null)
        })
        .catch((error) => {
        setError(error) 
        setCurrentVotes(currentVotes)   
        })
    }
}

function handelDownVote(){
    if(upVoteClicked){
        handelUpVote()
    }
    if(downVoteClicked){
        setCurrentVotes( currentVotes + 1)
        setDownVoteClicked(false)
        setVotes(id, articlesOrComments, + 1)
        .catch((error) => {
            setError(error)
            setCurrentVotes(currentVotes)
    })        
    }
    else {
        setCurrentVotes( currentVotes - 1)
        setDownVoteClicked(true)
        setVotes(id, articlesOrComments, -1)
        .catch((error) => {
            setError(error)
            setCurrentVotes(currentVotes)
    })
    }
}

  return (
      <div><h4>Votes: {currentVotes}</h4>      
    <button onClick={handelUpVote} className={upVoteClass} >+1</button>
    <button onClick={handelDownVote} className={downVoteClass} >-1</button>
    {error? <p>Your vote was not successful please try again</p>: null}
    </div>
  )
}

export default Votes