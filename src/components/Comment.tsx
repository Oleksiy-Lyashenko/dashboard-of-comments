import { CommentType } from "../types";

const Comment: React.FC<CommentType> = (props) => {

  return (
    <div className="comment">
      <div className="comment__likes">
        <button>+</button>
        <h4 className="comment__score">{props.score}</h4>
        <button>-</button>
      </div>
      <div className="comment__body">
        <div className="comment__top">
          <div className="comment__username">
            <img src={props.user.image.webp} alt="" className="img" />
            <p>{props.createdAt}</p>
          </div>
          <button>Reply</button>
        </div>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Comment;