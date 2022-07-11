// import { useEffect, useState } from 'react';
import '../style/style.scss'

import users from '../data/data.json';
import Comment from './Comment';
import Textarea from './Textarea';

const  App: React.FC = () => {
  return (
    <div className="page">
      <div className="content">
        {users.comments.map((comment) => (
          <Comment {...comment} key={comment.id}/>
        ))}

        <Textarea {...users.currentUser}/>

      </div>
    </div>
  );
}

export default App;
