import './index.css'
import {useState} from 'react'

const CommentItem = props => {
  const {commentDetails, classNameComment, deleteComment} = props
  const {id, name, comment} = commentDetails
  const [isLiked, setIsLiked] = useState(false)
  const onclickedLiked = () => {
    setIsLiked(prevLiked => !prevLiked)
  }
  const onclickedDelete = () => {
    const liElement = document.querySelector('.user-comment')
    liElement.remove(id)
    deleteComment(id)
  }
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="user-comment">
      <div className="response-comment">
        <div>
          <p className={classNameComment}>{name[0].toUpperCase()}</p>
        </div>
        <div className="comment-content">
          <div className="name-time">
            <p className="commented-name">{name}</p>
            <p className="comment-time">less than a minute ago</p>
          </div>
          <p>{comment}</p>
        </div>
      </div>
      <div className="reaction">
        <button
          className="like-container"
          type="submit"
          onClick={onclickedLiked}
        >
          <img src={likeImageUrl} alt="like" />
          <p>Like</p>
        </button>
        <button
          className="delete-icon"
          type="submit"
          onClick={onclickedDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
