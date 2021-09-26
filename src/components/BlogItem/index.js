// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachBlogData} = props
  const {title, description, publishedDate} = eachBlogData
  return (
    <div>
      <div className="row-styling">
        <div>
          <h1 className="list-item title">{title}</h1>
          <p className="list-item description">{description}</p>
        </div>
        <div>
          <p className="list-item date"> {publishedDate} </p>
        </div>
      </div>
      <div>
        <hr />
      </div>
    </div>
  )
}

export default BlogItem
