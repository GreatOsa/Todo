import React from "react";

export default function List({ item, removeTodo }) {
  console.log(item.id);
  return (
    <li key={item.id}>
      <span>
        {" "}
        {item.description}
        <span>
          <button onClick={() => removeTodo(item.id)}>Delete</button>
          <button>Edit</button>
        </span>
      </span>
    </li>
  );
}
