import { Link } from "react-router-dom"


function TopicCard({topic}) {
    

return (
    <ul className="card">
        <Link to={`/topics/${topic.slug}`}>
        <h2>{topic.slug}</h2>
        <p>{topic.description}</p>
        </Link>
    </ul>
)
}

export default TopicCard