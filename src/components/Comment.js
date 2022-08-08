import Score from "./Score";
import User from "./User";
import Reply from "./Reply";
import Comments from "./Comments";

function Comment(props) {
  return (
    <div className="comment__container">
      <div className="comment__content">{props.content}</div>
      <Score className="score" score={props.score}></Score>
      <User user={props.user}></User>
      <Reply commentId={props.id} commentUsername={props.user} />
      {props.replies.length > 0 && (
        <Comments comments={props.replies}></Comments>
      )}
    </div>
  );
}
export default Comment;
