import axios from "axios";

function FetchTodoList(id) {
  const param = "user_id=" + id;
  return axios({ method: "GET", url: "http://localhost:8080/todo?" + param });
}

function Fetch_Todo() {
  return axios({ method: "GET", url: "http://localhost:8080/products" });
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

export { FetchTodoList, Signup, Signin };
