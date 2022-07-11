import { RepliesType } from '../types';

const Replies: React.FC<RepliesType> = (props) => {
  return (
    <div className="comment replies__block">
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
  );
};

export default Replies;
