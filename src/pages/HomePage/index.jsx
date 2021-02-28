import { useEffect, useState } from 'react';
import './HomePage.scss';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import queryString from 'query-string';
import PostFilterForm from './components/PostFiltersForm';
import Clock from './components/Clock';
import BetterClock from './components/BetterClock';
import MagicBox from './components/MagicBox';

function HomePage() {
    const [todoList, setTodoList] = useState(
        [
            { id: 1, title: 'I love You' },
            { id: 2, title: 'We love You' },
            { id: 3, title: 'They love You' },
        ]
    );

    const [postList, setPostLisit] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1,
    });

    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 10,
        title_like: '',
    });

    useEffect(() => {
        async function fetchPostList() {

            try {
                //_page: 1,
                //_limit: 10,
                // =>>
                // _limit=10&_page=1
                const paramsString = queryString.stringify(filters);
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
                const reponse = await fetch(requestUrl);
                const reponseJson = await reponse.json();
                console.log({ reponseJson });

                const { data, pagination } = reponseJson;
                setPostLisit(data);
                setPagination(pagination);
            } catch (error) {
                console.log("Failed to fetch post list :", error.message);
            }


        };
        console.log("Post list effect");
        fetchPostList();
    }, [filters])

    useEffect(() => {
        console.log("Todo list effect");
    })

    function handlePageChange(newPage) {
        console.log('New page', newPage);
        setFilters({
            ...filters,
            _page: newPage,
        });
    }

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

    function handleFiltersChange(newFilters) {
        console.log("new filter: ", newFilters);
        // vì có thể thêm điều kiện làm page nhỏ đi nên cần reset lại page=1
        setFilters({
            ...filters,
            _page: 1,
            title_like: newFilters.searchTerm,
        })
    }

    const [showClock, setShowClock] = useState(true);




    return (
        <div className="app">
            <h1>React Hook - TodoList</h1>
            {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
            {/* <PostFilterForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      />
      {showClock && <Clock />}
      <button onClick={() => { setShowClock(false) }}>Hide clock</button>
      <BetterClock /> */}

            <MagicBox />

        </div>
    );
}

export default HomePage;
