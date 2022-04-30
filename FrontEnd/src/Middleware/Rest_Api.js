import axios from "axios";

function FetchPosts(param) {
  return axios({
    method: "GET",
    url: "http://localhost:8080/post/",
  });
}

function retweetPosts(param) {
  const post = {
    describe: param.describe,
    id: param.id,
    img_src: param.img_src,
    name: param.name,
    subscribe: param.subscribe,
    post_user_id: param.user_id,
    curr_user_id: param.curr_user_id,
  };

  return axios({
    method: "POST",
    url: "http://localhost:8080/post/RetweetPost",
    data: post,
  });
}

function createPosts(param) {
  const posts = {
    name: param.name,
    subscribe: param.subscribe,
    describe: param.describe,
    retweet_user_id: null,
    user_id: param.user_id,
    file: param.file,
  };
  console.log("param for axios: ", param);
  return axios({
    method: "POST",
    url: "http://localhost:8080/post/CreatePost",
    data: posts,
  });
}

function displayProfile(name) {
  return axios({ method: "GET", url: "http://localhost:8080/user/" + name });
}

function Fetch_Tags() {
  return axios({ method: "GET", url: "http://localhost:8080/tag/" });
}

function Fetch_Post_Tags() {
  return axios({ method: "GET", url: "http://localhost:8080/tag/post" });
}

function Fetch_Label(param) {
  return axios({ method: "GET", url: "http://localhost:8080/categories/" });
}

function Check_Out(param) {
  console.log("ID:", param);
  return axios({
    method: "POST",
    url: "http://localhost:8080/create-checkout-session/",
    data: param,
  });
}

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

export {
  FetchPosts,
  Signup,
  Signin,
  Fetch_Tags,
  createPosts,
  retweetPosts,
  Fetch_Post_Tags,
  displayProfile,
  Check_Out,
};
