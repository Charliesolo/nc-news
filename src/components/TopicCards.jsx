import TopicCard from "./TopicCard"

function TopicCards({topicArray}) {
    
  return (
    <ul className="article_list">
        {topicArray.map((topic)=>{
        return <TopicCard topic={topic} key={topic.slug}/>
    })}
    </ul>
  )
}

export default TopicCards