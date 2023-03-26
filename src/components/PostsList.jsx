import React from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import { useState } from "react";
import classes from "./PostsList.module.css";

const PostsList = () => {
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredBody, setEnteredBody] = useState("");

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  return (
    <>
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Jack" body="Node.js is awesome!" />
      </ul>
    </>
  );
};

export default PostsList;
