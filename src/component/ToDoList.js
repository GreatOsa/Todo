import React from "react";
import List from "./List";

export default function ToDoList({ toDoArray, removeTodo, setToDoArray }) {
  return (
    <ul>
      {toDoArray.map((item) => (
        <List item={item} key={item.id} />
      ))}
    </ul>
  );
}
