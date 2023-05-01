import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodoType from './models/todo';

function App() {

  const [todos, setTodos] = useState<TodoType[]>([])

  // const todos = [
  //   new Todo('Learn React'),
  //   new Todo('Learn Typescript')
  // ]

  const addTodoHandler = (newtodo: string) => {
    setTodos(prev => [...prev, new TodoType(newtodo)])
  }

  const removeTodohandler = (todoId:string) => {
    setTodos(prev => prev.filter(todo =>todo.id !== todoId))
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodohandler}/>
    </div>
  );
}

export default App;
