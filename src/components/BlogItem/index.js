import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-list-container">
      <div className="blog-title-date-div">
        <h1 className="blog-title">{title}</h1>
        <h1 className="published-date">{publishedDate}</h1>
      </div>
      <p className="blog-description">{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
