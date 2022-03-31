import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { Signin } from "../Middleware/Rest_Api";

const SignIn = () => {
  const [user, setUser] = useState("");
  const [Alert, setAlert] = useState("");
  const [flag, setFlag] = useState(false);

  const isEmptyOrSpaces = (str) => {
    return str === null || str.match(/^ *$/) !== null;
  };

  const checkValidation = (params) => {
    if (isEmptyOrSpaces(params.email) || isEmptyOrSpaces(params.password)) {
      return false;
    }
    return true;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setAlert("");

    if (checkValidation(user)) {
      setAlert(<Alert variant="success">User Successfully Registered!</Alert>);
      try {
        const res = await Signin(user);
        localStorage.setItem("user_id", res.data.user_id);
        console.log("User id ", res.data.user_id);
        setFlag(true);
      } catch (error) {
        setAlert(<Alert variant="success">User Does not exists;</Alert>);
      }
    } else {
      setFlag(false);
      setAlert(
        <Alert variant="warning">
          UserName or Email of the product is left empty! Kindly re-input
          fields!
        </Alert>
      );
    }
  };

  const setValue = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  return (
    <Card style={{ width: "70rem" }} className="card">
      <Form onSubmit={submitForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            value={user.email}
            onChange={(e) => setValue("email", e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            value={user.password}
            onChange={(e) => setValue("password", e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          SIGN IN
        </Button>
      </Form>
      {flag && <Navigate to="/" />}
    </Card>
  );
};

export default SignIn;
