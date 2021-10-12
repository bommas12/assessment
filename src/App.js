import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import CreateTodo from './components/CreateTodo/CreateTodo';
import TodoList from './components/TodoList/TodoList';
import Utils from './utils/Utils';
import './App.css';
import CompletedTasks from './pages/CompletedTasks';
import HomePage from './pages/HomePage';
import TodoProvider from './todocontext/TodoContext';

function App() {
  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   const todosFromStore = Utils.retrieve()
  //   console.log(todosFromStore)
  //   if (todosFromStore) {
  //     setTodos(todosFromStore);
  //   }
  // }, []);

  // const markCompleted = useCallback((uuid) => {
  //   console.log(uuid);
  //   const markedTodos = todos.map(todo => todo.uuid === uuid ? {
  //     ...todo,
  //     completed: true
  //   } : todo);
  //   console.log(markedTodos);
  //   setTodos(markedTodos);
  // });

  // const removeTodo = useCallback((uuid) => {
  //   console.log(uuid);
  //   const filteredTodos = todos.filter(todo => todo.uuid !== uuid);
  //   console.log(filteredTodos);
  //   setTodos(filteredTodos);
  // });

  // useEffect(() => {
  //   if (todos.length) {
  //     Utils.store(todos);
  //   }
  // }, [todos])

  // const onCreated = (todoItem) => {
  //   setTodos(prev => [...prev, todoItem]);
  // }
  return (
    <div className="App">

      <TodoProvider>
        <Router>
          <nav className="nav-bar">
            <NavLink exact to="/" className="tab-section" activeClassName="selected">
              CreateTodo
            </NavLink>
            <NavLink to="/completed" className="tab-section" activeClassName="selected">
              CompletedTasks
            </NavLink>
          </nav>
          <Switch>
            <Route path="/completed">
              <CompletedTasks />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </TodoProvider>

    </div>
  );
}

export default App;
