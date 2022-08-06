import Score from "./Score";
import User from "./User";
import Reply from "./Reply";
import Comments from "./Comments";

function Comment(props) {
  // id, content, createdAt, score, user, replies
  return (
    <div className="comment__container">
      <div className="comment__content">{props.content}</div>
      <Score className="score" score={props.score}></Score>
      <User user={props.user}></User>
      <div></div>
      <div></div>
      <Reply></Reply>
      {/* <Comments comments={props.replies}></Comments> */}
    </div>
  );
}
export default Comment;
