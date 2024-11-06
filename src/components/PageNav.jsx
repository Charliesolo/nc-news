import { useEffect, useState } from "react"
import firstPage from "../assets/firstPage.svg"
import previousPage from "../assets/previousPage.svg"
import nextPage from "../assets/nextPage.svg"
import lastPage from "../assets/lastPage.svg"

function PageNav({page, setPage, limit, numOfArticles}) {
    const[totalPages, setTotalPage] = useState(Math.ceil(numOfArticles/limit))

    useEffect(()=>{
        if(page>totalPages){
            setPage(1)
        }
    }, [])


    function handleFirstPage(event){
        event.preventDefault()
        setPage(1)
    }
    function handlePreviousPage(event){
        event.preventDefault()
        if(page>1){
            setPage((page) => page - 1)
        }
    }
    function handleNextPage(event){
        event.preventDefault()
        if(page<totalPages){
            setPage((page) => page + 1)
        }
    }
    function handleLastPage(event){
        event.preventDefault()
        if(page!==totalPages){
            setPage(totalPages)
        }
    }

  return (
    <div className="page-nav">
        <input type="image" className="nav-button" src={firstPage} onClick={handleFirstPage}/>
        <input type="image" className="nav-button" src={previousPage} onClick={handlePreviousPage}/>
        <input type="image" className="nav-button" src={nextPage} onClick={handleNextPage}/>
        <input type="image" className="nav-button" src={lastPage} onClick={handleLastPage}/>

        <p>Page {page} of {totalPages}</p></div>
  )
}

export default PageNav