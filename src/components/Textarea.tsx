import React from 'react';
import { User } from '../types';

const Textarea: React.FC<User> = (props) => {
  return (
    <div className="textarea">
      <img src={props.image.webp} alt="logo" className="textarea__icon" />
      <textarea className="textarea__text" placeholder="Add a comment..." />
      <button className="textarea__button">
        <div className="textarea__button__text">Send</div>
      </button>
    </div>
  );
};

export default Textarea;