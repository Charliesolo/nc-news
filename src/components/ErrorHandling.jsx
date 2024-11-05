import { useEffect, useState } from "react"

function ErrorHandling({error}) {

    const[errStatus, setErrStatus]= useState(null)
    const[errMsg, setErrMsg]= useState(null)

    useEffect(()=>{
        console.log(error)
        if(error.response){
            setErrMsg(error.response.data.msg)
            setErrStatus(error.response.status)
        } else setErrMsg(error.message)

    }, [])
    
return (
<section>
    <p>Something went wrong.</p>
    {errStatus? <p>{errStatus}</p>: null}
    {errMsg? <p>{errMsg}</p>: null}
</section>
)
}

export default ErrorHandling