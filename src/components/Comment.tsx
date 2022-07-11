import { CommentType } from "../types";
import Replies from "./Replies";

const Comment: React.FC<CommentType> = (props) => {

  return (
    <>
      <div className="comment">
        <div className="comment__likes">
          <button>+</button>
          <h4 className="comment__score">{props.score}</h4>
          <button>-</button>
        </div>
        <div className="comment__body">
          <div className="comment__top">
            <div className="comment__title">
              <img src={props.user.image.webp} alt="" className="comment__img" />
              <div className="comment__username">{props.user.username}</div>
              <div className="comment__date">{props.createdAt}</div>
            </div>
            <button className="comment__button">
              <img src="./images/icon-reply.svg" alt="" className="comment__button--img" />
              Reply
            </button>
          </div>
          <p className="comment__text">{props.content}</p>
        </div>
      </div>

      {props.replies.length > 0 && (
        <div className="replies">
          {props.replies.map((replie) => (
            <Replies {...replie} />
          ))}
        </div>
      )}
    </>
  );
};

export default Comment;