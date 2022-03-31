import { render } from "@testing-library/react";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './Layouts/Error'
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn"
import Todo from "./Components/Todo";

function App() {

  return (
    <Router>
    <div className="App">
      <div className="content">
        <Routes>
          <Route exact path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/" element={<Todo/>} />
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
