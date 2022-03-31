import { useEffect, useState } from "react";
import { Alert, Badge, ButtonGroup, Button, Card } from "react-bootstrap";
import { FetchTodoList } from "../Middleware/Rest_Api";
import NavBar from "../Layouts/Navbar";

const Todo = () => {
  const [todolist, setTodo] = useState([]);
  const [alert, setAlert] = useState("");

  useEffect(() => {
    callAxios();
  }, []);

  const callAxios = async () => {
    setAlert("");
    console.log("id of user: ", localStorage.getItem("user_id"));
    const result = await FetchTodoList(localStorage.getItem("user_id"));
    console.log("Here is result: ", result);
    if (result.data.length === 0) {
      setAlert(
        <Alert variant="success"> Horay, You have no more Todos Left! </Alert>
      );
    } else {
      setTodo(result.data);
    }
  };

  const Display = ({ todolist }) => {
    let a2 = todolist.map((todo_item) => (
      <div key={todo_item.todo_id}>
        <Card style={{ margin: "20px" }}>
          <Card.Header>{todo_item.title}</Card.Header>
          <Badge bg="secondary">{todo_item.priority}</Badge>
          <ButtonGroup
            aria-label="Basic example"
            size="sm"
            style={{ "margin-top": "8px" }}
          >
            <Button variant="secondary">Edit</Button>
            <Button variant="secondary">Delete</Button>
          </ButtonGroup>
        </Card>
      </div>
    ));
    return <ul>{a2}</ul>;
  };

  return (
    <div>
      <NavBar />
      {alert}
      <div>{<Display todolist={todolist}></Display>}</div>
    </div>
  );
};

export default Todo;
