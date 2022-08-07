import imge from "../images/avatars/image-amyrobson.png";

function User(props) {
  // image, user name
  // const image = require("" +props.user.image.png);

  return (
    <div className="user__container">
      <img src={props.image} alt="" />
      <div>{props.user.username}</div>
    </div>
  );
}
export default User;
