// import { useEffect, useState } from 'react';
import '../style/style.scss'

import users from '../data/data.json';
import Comment from './Comment';

const  App: React.FC = () => {
  return (
    <div className="page">
      <div className="content">
        {users.comments.map((comment) => (
          <Comment {...comment} key={comment.id}/>
        ))}

      </div>
    </div>
  );
}

export default App;
