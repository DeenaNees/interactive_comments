import { createContext, useContext, useState } from "react";
import { data } from "../data";

const CommentsContext = createContext();

export const useComments = () => {
  return useContext(CommentsContext);
};

export const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState(data.comments);

  const addReply = ({ commentId, reply }) => {
    setComments((comments) => {
      return comments.map((comment) => {
        if (comment.id === commentId) {
          comment = { ...comment, replies: [...comment.replies, reply] };
        }
        return comment;
      });
    });
  };

  // add other functions to edit, delete & update the score of comments

  return (
    <CommentsContext.Provider
      value={{ currentUser: data.currentUser, comments, addReply }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
