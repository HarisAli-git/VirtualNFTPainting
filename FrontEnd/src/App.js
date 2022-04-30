import { render } from "@testing-library/react";
import React, { Component, Profiler } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/cart";
import Error from "./Layouts/Error";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import FilterBar from "./Layouts/FilterBar";
import Navbar from "./Layouts/Navbar";
import NewPost from "./Components/NewPost";
import Profile from "./Components/profile";
import Success from "./Components/success";
import Cancel from "./Components/cancel";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<FilterBar />} />
            <Route path="/:id" element={<Profile />} />
            <Route path="/create" element={<NewPost />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/success" element={<Success />} />
            {/* <Route path="todo/:id" element={<EditTodo/>}/> */}
            {/* <Route path="/:cid" element={<ViewCategory/>}/> */}
            {/* <Route path="/create" element={<AddTodo/>}/> */}
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
