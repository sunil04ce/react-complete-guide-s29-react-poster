const names = ["James", "Herry"];

const Post = () => {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <>
      <p>{chosenName}</p>
      <p>React.js is awesome!</p>
    </>
  );
};

export default Post;
