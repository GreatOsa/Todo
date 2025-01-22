import React, { useState } from "react";
import Logo from "./component/Logo";
import Input from "./component/Input";
import ToDoList from "./component/ToDoList";
import "./index.css";

export default function App() {
  const [toDoArray, setToDoArray] = useState([]);
  const [todoDetails, setTodoDetails] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);

    if (!todoDetails) return;

    const newItem = { todoDetails, id: Date.now() }; // create a new item with a unique id
    setToDoArray([...toDoArray, { description: todoDetails, id: Date.now() }]); // add the new item to the array

    console.log(toDoArray);
    console.log(newItem);

    setTodoDetails(""); // clear the input field after adding the item
  }

  const removeTodo = (id) => {
    setToDoArray((toDoArray) => toDoArray.filter((item) => item.id !== id));

    // const newItems = toDoArray.filter((item) => item.id !== id));
    // setToDoArray(newItems);
  };

  return (
    <div className="custom-container">
      <Logo />
      <Input
        toDoArray={toDoArray}
        setToDoArray={setToDoArray}
        todoDetails={todoDetails}
        setTodoDetails={setTodoDetails}
        handleSubmit={handleSubmit}
      />
      <ToDoList
        toDoArray={toDoArray}
        removeTodo={() => removeTodo()}
        setToDoArray={setToDoArray}
      />
    </div>
  );
}
