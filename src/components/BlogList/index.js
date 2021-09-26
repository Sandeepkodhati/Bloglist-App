// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsListData} = props
  return (
    <ul>
      {blogsListData.map(eachBlog => (
        <BlogItem eachBlogData={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}

export default BlogList
