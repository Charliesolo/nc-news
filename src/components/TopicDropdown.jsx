
function TopicDropdown({topic}) {
  return (
    <option value={topic.slug}>{topic.slug}</option>
  )
}

export default TopicDropdown