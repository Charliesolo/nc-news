import { useEffect, useState } from "react"
import firstPage from "../assets/firstPage.svg"
import previousPage from "../assets/previousPage.svg"
import nextPage from "../assets/nextPage.svg"
import lastPage from "../assets/lastPage.svg"

function PageNav({page, setPage, limit, numOfArticles}) {
    const[totalPages, setTotalPage] = useState(Math.ceil(numOfArticles/limit))

    useEffect(()=>{
        setTotalPage(Math.ceil(numOfArticles/limit))
        if(page>totalPages){
            setPage(1)
        }
    }, [limit])

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
        <input type="image" className={page === 1? "disabled-nav-button": "nav-button"} alt="Go to first page" src={firstPage} onClick={handleFirstPage}/>
        <input type="image" className={page === 1? "disabled-nav-button": "nav-button"} alt="Go to previous page" src={previousPage} onClick={handlePreviousPage} disabled={page === 1}/>
        <input type="image" className={page === totalPages ? "disabled-nav-button": "nav-button"} src={nextPage} alt="Go to next page" onClick={handleNextPage} />
        <input type="image" className={page === totalPages ? "disabled-nav-button": "nav-button"} alt="Go to last page" src={lastPage} onClick={handleLastPage} />

        <p>Page {page} of {totalPages}</p></div>
  )
}

export default PageNav