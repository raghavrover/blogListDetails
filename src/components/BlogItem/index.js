import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, author, avatarUrl, imageUrl, topic, title} = blogItem

  return (
    <li className="blog-item-container">
      <Link className="blog-link-item" to={`/blogs/${id}`}>
        <img className="blog-thumbnail" src={imageUrl} alt="thumbnail" />
        <div className="blog-item-details-container">
          <p className="blog-category">{topic}</p>
          <h1 className="blog-heading">{title}</h1>
          <div className="blog-author-details">
            <img className="author-img" src={avatarUrl} alt="author" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
