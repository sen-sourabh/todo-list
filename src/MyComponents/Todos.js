import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todo List</h3>
      {props.todos.map((todo) => {
        return (
          <div>
            <TodoItem
              todo={todo}
              key={todo.id}
              onDelete={props.onDelete}
            ></TodoItem>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
