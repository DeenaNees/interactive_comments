import Comment from "./Comment";

function Comments(props) {
  return (
    <table className="comments__table">
      <tbody>
        {props.comments.map((comment, key) => {
          return (
            <tr key={key}>
              <td>
                <Comment
                  id={comment.id}
                  content={comment.content}
                  createdAt={comment.createdAt}
                  score={comment.score}
                  user={comment.user}
                  replies={comment.replies}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Comments;
