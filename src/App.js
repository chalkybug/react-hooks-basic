import { useState } from 'react';
import './App.scss';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState(
    [
      { id: 1, title: 'I love You' },
      { id: 2, title: 'We love You' },
      { id: 3, title: 'They love You' },
    ]
  );

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log(formValues);
    // add new wtodo to current todo list
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>React Hook - TodoList</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />

    </div>
  );
}

export default App;
