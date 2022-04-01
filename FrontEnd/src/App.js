import { render } from "@testing-library/react";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Layouts/Error";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import FilterBar from "./Layouts/FilterBar";
import Navbar from "./Layouts/Navbar";

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
