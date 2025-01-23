import React from "react";

export default function List({ item, setToDoArray }) {
  // removeTodo function
  const removeTodo = (id) => {
    setToDoArray((item) => item.filter((item) => item.id !== id)); // remove the item from the array
  };

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
