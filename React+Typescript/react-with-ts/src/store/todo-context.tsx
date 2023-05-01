import React from "react";
import TodoType from "../models/todo";

const TodosContext = React.createContext<{
  items: TodoType[];
  addTodo: () => void;
  removeTodo: (id: string) => void;
}>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});
