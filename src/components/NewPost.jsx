import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost({ onCancel, onAddPost }) {
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredBody, setEnteredBody] = useState("");

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };

    onAddPost(postData);
    onCancel();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancle
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
