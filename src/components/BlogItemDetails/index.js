import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogItemData: {}, isBlogDetailsLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
      imageUrl: data.image_url,
      title: data.title,
      content: data.content,
    }
    console.log(updatedData)
    this.setState({blogItemData: updatedData, isBlogDetailsLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogItemData, isBlogDetailsLoading} = this.state
    const {avatarUrl, author, imageUrl, title, content} = blogItemData

    return (
      <>
        {isBlogDetailsLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-item-container">
            <div className="blog-item-details">
              <h1 className="blog-title">{title}</h1>
              <div className="blog-author-container">
                <img src={avatarUrl} className="author-avatar" alt="author" />
                <p className="author-name">{author}</p>
              </div>
              <img src={imageUrl} alt={title} className="thumbnail-image" />
              <p className="blog-content">{content}</p>
            </div>
          </div>
        )}
      </>
    )
  }

  render() {
    return <>{this.renderBlogItemDetails()}</>
  }
}

export default BlogItemDetails
