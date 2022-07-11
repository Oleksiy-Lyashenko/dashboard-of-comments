export interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export interface RepliesType {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: User;
}

export interface CommentType {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: RepliesType[] | [];
}

// export interface E {
//   id: number;
//   content: string;
//   createdAt: string;
//   score: number;
//   user: {
//     image: {
//       png: string;
//       webp: string;
//     };
//     username: string;
//   };
// }
