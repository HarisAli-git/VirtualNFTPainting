import React from "react";
import { FetchPosts } from "../Middleware/Rest_Api";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Navigate } from "react-router-dom";

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
    const res = await FetchPosts(sessionStorage.getItem("user_id"));
    setPosts(res.data.data);
    console.log("posts: ", res.data);
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
          <Card.Text>Description {myprod.describe}</Card.Text>
          {JSON.stringify(myprod.id)}
          <Link to={`/${myprod.id}`}>
            <Button variant="primary">View Details!</Button>
          </Link>
        </Card.Body>
      </Card>
      <br />
    </div>
  ));

  return <ul>{a2}</ul>;
};

export { Main, Display };
