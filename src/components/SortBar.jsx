

function SortBar({setSortBy, setOrder, sortBy, order, limit, setLimit}) {


    function handleSortByChange(event){
        event.preventDefault()
        setSortBy(event.target.value) 

    }

    function handleOrderChange(event){
        event.preventDefault()
        setOrder(event.target.value)
    }

    function handleLimitChange(event){
        event.preventDefault()
        setLimit(event.target.value)
    }

  return (
    <form className='sort-bar'>
        <label htmlFor="sortBy">Sort By: </label>
        <select id="sortBy" onChange={handleSortByChange} value={sortBy}>
            <option value="created_at">Date</option>
            <option value="author">Author</option>
            <option value="title">Title</option>
            <option value="topic">Topic</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Comment Count</option>
        </select>
        <label htmlFor="order">Order:</label>
        <select id="order" onChange={handleOrderChange} value={order}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
        </select>
        <label htmlFor="limitSelect" >Articles per Page</label>
        <select id="limitSelect" onChange={handleLimitChange} value={limit}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>

        </select>

    </form>
  )
}

export default SortBar