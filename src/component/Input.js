import React from "react";

export default function Input({ todoDetails, setTodoDetails, handleSubmit }) {
  return (
    <div className="py-2">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          aria-label="add item ..."
          aria-describedby="inputGroup-sizing-lg"
          placeholder="add item ..."
          value={todoDetails}
          onChange={(e) => {
            setTodoDetails(e.target.value);
            // console.log(e.target);
          }}
        />
        <button type="submit" className="btn btn-dark text-center mt-2">
          ADD
        </button>
      </form>
    </div>
  );
}
