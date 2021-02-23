import { useEffect, useState } from 'react';
import './App.scss';
import PostList from './components/PostList';
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

  const [postList, setPostLisit] = useState([]);

  useEffect(() => {
    async function fetchPostList() {

      try {
        const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const reponse = await fetch(requestUrl);
        const reponseJson = await reponse.json();
        console.log({ reponseJson });

        const { data } = reponseJson;
        setPostLisit(data);
      } catch (error) {
        console.log("Failed to fetch post list :", error.message);
      }


    };
    console.log("Post list effect");
    fetchPostList();
  }, [])

  useEffect(() => {
    console.log("Todo list effect");
  })

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
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
      <PostList posts={postList} />
    </div>
  );
}

export default App;
