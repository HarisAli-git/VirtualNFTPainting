import React from "react";
import { retweetPosts, FetchPosts } from "../Middleware/Rest_Api";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 2) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const Main = ({ value }) => {
  const [posts, setPosts] = useState([]);
  const [alert, setAlert] = useState(" ");

  useEffect(() => {
    callAxios();
  }, [value]);

  const callAxios = async (e) => {
    if (sessionStorage.getItem("user_id") === "undefined") {
      <Navigate to="/signin" />;
    }
    console.log("User Id: ", sessionStorage.getItem("user_id"));
    const res = await FetchPosts();
    setPosts(res.data.data);
    console.log("posts: ", res);
  };

  return (
    <div>
      <div className="container b-co">
        {alert}
        <div>{<Display posts={posts}></Display>}</div>
      </div>
    </div>
  );
};

const Display = ({ posts }) => {
  let a2 = Object.values(posts).map((myprod, index) => (
    <div key={index}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={myprod.img_src}
          style={{ maxWidth: "200px", maxHeight: "280px" }}
        />
        <Card.Body>
          <Card.Title>{myprod.name}</Card.Title>
          <Card.Text>
            Description <ReadMore>{myprod.describe}</ReadMore>
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              let prod = myprod;
              prod["curr_user_id"] = sessionStorage.getItem("user_id");
              retweetPosts(prod);
            }}
          >
            Re Tweet!
          </Button>
          th
        </Card.Body>
      </Card>
      <br />
    </div>
  ));

  return <ul>{a2}</ul>;
};

export { Main, Display };
