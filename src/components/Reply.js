import reply from "../images/icon-reply.svg";
import { useComments } from "../context/CommentsContext";

function Reply({ commentId, commentUsername }) {
  const { addReply, currentUser } = useComments();

  // add a fake reply to the comment for testing purposes
  const handleReplyClick = () => {
    addReply({
      commentId,
      reply: {
        id: Date.now(),
        content: "Test comment.",
        createdAt: "Now",
        score: 0,
        replyingTo: commentUsername,
        user: currentUser,
        replies: [],
      },
    });
  };

  return (
    <div className="reply__container" onClick={handleReplyClick}>
      <img src={reply} alt="" />
      <div>Reply</div>
    </div>
  );
}

export default Reply;
