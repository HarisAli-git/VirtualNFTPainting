import { useEffect, useState } from "react";
import {
  Post_SignUpMongo,
  Fetch_cat_Mongo,
} from "../middleware/RESTapi_caller";
import { Alert } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const NewPost = () => {
  const [post, setPost] = useState({});
  const [isPending, setIsPending] = useState(false);
  const [categories, setCategories] = useState([]);
  const [alert, setAlert] = useState(" ");
  const [flag, setFlag] = useState(false);

  const FetchTags = async (e) => {
    const resp = await Fetch_cat_Mongo();
    setCategories(resp.data);
  };

  useEffect(() => {
    console.log("PostGreSQL Tags_Mounted!!!");
    FetchCategories();
  }, []);

  const isEmptyOrSpaces = (str) => {
    return str === null || str.match(/^ *$/) !== null;
  };

  const checkValidation = (params) => {
    console.log("Here the Params for Validation: ", params);

    if (isEmptyOrSpaces(params.name)) {
      return false;
    }
    if (typeof params.category === "undefined") {
      return false;
    }
    return true;
  };

  const setValue = (name, value) => {
    setPost({ ...post, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setIsPending(true);

    setAlert(" ");

    if (checkValidation(post)) {
      setAlert(<Alert variant="success">post Successfully Added!</Alert>);
      const res = await Post_SignUpMongo(post);
      setFlag(true);
      setIsPending(false);
      console.log(res);
    } else {
      setIsPending(false);
      setAlert(
        <Alert variant="warning">
          Name or Category of the post is left empty! Kindly re-input fields!
        </Alert>
      );
    }
  };

  return (
    <div className="create">
      <h1>
        <strong>Add a new post</strong>
      </h1>
      <form onSubmit={submitForm}>
        <label>Name: </label>
        <input
          type="text"
          required
          value={post.name}
          onChange={(e) => setValue("name", e.target.value)}
        ></input>
        <label>Image Source: </label>
        <input
          type="text"
          required
          value={post.img_src}
          onChange={(e) => setValue("img_src", e.target.value)}
        ></input>
        <label>Description: </label>
        <input
          type="text"
          required
          value={post.describe}
          onChange={(e) => setValue("descriptuon", e.target.value)}
        />
        <label>Category: </label>
        <select
          value={post.category}
          onChange={(e) => setValue("category", e.target.value)}
        >
          <option key={"empty"} value="">
            Please Select a category
          </option>
          {categories.map((cat, index) => (
            <option key={index} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
        {alert}
        {!isPending && <button>Add New post</button>}
        {isPending && <button disabled>Adding New post!...</button>}
      </form>
      {flag && <Navigate to="/" />}
    </div>
  );
};

export default NewPost;
