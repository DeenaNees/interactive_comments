function User(props) {
  return (
    <div className="user__container">
      <img src={props.user.image.png} alt="" />
      <div>{props.user.username}</div>
    </div>
  );
}
export default User;
