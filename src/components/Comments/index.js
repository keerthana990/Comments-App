import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    count: 0,
    initialComment: [],
    isLikedUrl: false,
  }

  onchangeName = event => {
    this.setState({name: event.target.value})
  }

  onchangecomment = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      bgClass:
        initialContainerBackgroundClassNames[
          Math.floor(
            Math.random() * initialContainerBackgroundClassNames.length,
          )
        ],
    }

    this.setState(prevState => ({
      initialComment: [...prevState.initialComment, newComment],
      count: prevState.count + 1,
      name: '',
      comment: '',
    }))
  }

  deleteComment = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
  }

  render() {
    const {name, comment, count, initialComment, isLikedUrl} = this.state
    return (
      <div className="container">
        <div className="top-container">
          <div className="left-container">
            <h1>Comments</h1>
            <p>Say Something About 4.0 Technologies</p>
            <form
              className="contact-form-container"
              onSubmit={this.onAddComment}
            >
              <input
                value={name}
                placeholder="Your Name"
                onChange={this.onchangeName}
                className="input"
              />
              <br />
              <textarea
                value={comment}
                placeholder="Your Comment"
                onChange={this.onchangecomment}
                className="input"
                cols="12"
                rows="4"
              />
              <button type="submit" className="sumbit-button">
                Add Comment
              </button>
            </form>
          </div>
          <div className="right-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="comment-img"
              alt="comments illustration"
            />
          </div>
        </div>
        <ul>
          <hr />
          <p>
            <span>{count}</span> Comments
          </p>
          {initialComment.map(eachItem => (
            <CommentItem
              key={eachItem.id}
              commentDetails={eachItem}
              classNameComment={eachItem.bgClass}
              isLikedUrl={isLikedUrl}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
