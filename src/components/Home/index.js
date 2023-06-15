import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogList from '../BlogList'
import UserInfo from '../UserInfo'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    try {
      const response = await fetch('https://apis.ccbp.in/blogs')
      const data = await response.json()
      const formattedData = data.map(object => ({
        id: object.id,
        avatarUrl: object.avatar_url,
        author: object.author,
        topic: object.topic,
        imageUrl: object.image_url,
        title: object.title,
      }))
      this.setState({blogList: formattedData, isLoading: false})
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <div className="home-container">
        <UserInfo />
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <BlogList blogList={blogList} />
        )}
      </div>
    )
  }
}

export default Home
