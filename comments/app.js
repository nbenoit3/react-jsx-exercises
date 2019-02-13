let ProfilePic = () => {
  return <img src="./img/nick-img.PNG" height="20" weight="20" />;
};

let CommentBody = () => {
  return (
    <div>
      <strong>Nick Benoit</strong>
      <Comment />
    </div>
  );
};

let Comment = () => {
  return (
    <div>
      <ProfilePic />
      <CommentBody />
    </div>
  );
};

let Comments = () => {
  return (
    <ul>
      <li>
        <Comment />
      </li>
    </ul>
  );
};

ReactDOM.render(<Comments />, document.getElementById("root"));
