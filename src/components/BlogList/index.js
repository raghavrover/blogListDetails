import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogList} = props

  return (
    <ul className="blog-items-list">
      {blogList.map(object => (
        <BlogItem key={object.id} blogItem={object} />
      ))}
    </ul>
  )
}

export default BlogList
