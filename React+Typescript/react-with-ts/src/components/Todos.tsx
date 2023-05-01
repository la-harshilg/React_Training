import React, { ReactNode } from "react";
import TodoType from "../models/todo";
import Todo from "./Todo";

const Todos: React.FC<{
  items: TodoType[];
  onRemoveTodo: (id: string) => void;
  children?: ReactNode;
}> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <Todo
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
