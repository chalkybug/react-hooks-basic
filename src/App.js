import { useState } from 'react';
import './App.scss';
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

  return (
    <div className="app">
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />

    </div>
  );
}

export default App;
