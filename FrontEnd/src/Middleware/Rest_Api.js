import axios from "axios";

function FetchPosts(param) {
  const user = {
    user_id: "11",
  };
  return axios({
    method: "POST",
    url: "http://localhost:8080/post/",
    data: user,
  });
}

function createPosts(param) {
  const posts = {
    name: param.name,
    img_src: param.img_src,
    subscribe: param.subscribe,
    describe: param.describe,
  };
  return axios({
    method: "POST",
    url: "http://localhost:8080/post/CreatePost",
    data: posts,
  });
}

function Fetch_Tags() {
  return axios({ method: "GET", url: "http://localhost:8080/tags/" });
}

function Fetch_Label(param) {
  return axios({ method: "GET", url: "http://localhost:8080/categories/" });
}

// function Fetch_Todo(id) {
//     return axios({ method: "GET", url: "http://localhost:5000/products/" + id });
// }

function Delete_Todo(id) {
  return axios({
    method: "DELETE",
    url: "http://localhost:8080/products/" + id,
  });
}

function Signup(param) {
  const user = {
    username: param.username,
    email: param.email,
    password: param.password,
  };
  return axios({
    method: "POST",
    url: "http://localhost:8080/account/register",
    data: user,
  });
}

function Signin(param) {
  const user = {
    email: param.email,
    password: param.password,
  };
  console.log("here req");
  return axios({
    method: "POST",
    url: "http://localhost:8080/account/login",
    data: user,
  });
}

export { FetchPosts, Signup, Signin, Fetch_Tags, createPosts };
