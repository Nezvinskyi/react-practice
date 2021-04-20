import React, { Component } from 'react';
import Layout from './components/Layout';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import Filter from './components/Filter';
import shortid from 'shortid';
import todos from './data/todos.json';

// import Form from './components/Form';

class App extends Component {
  state = {
    todos: todos,
    filter: '',
  };

  addTodo = text => {
    console.log(text);
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  getCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  getPendingTodos = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (!todo.completed ? acc + 1 : acc), 0);
  };

  render() {
    const { todos, filter } = this.state;
    const completedTodos = this.getCompletedTodos();
    const pendingTodos = this.getPendingTodos();
    const filteredTodos = this.getFilteredTodos();

    return (
      <Layout>
        <h1>Todo List</h1>
        {/* <Form onSubmit={this.formSubmitHandler} /> */}

        <TodoEditor onSubmit={this.addTodo} />

        <div>
          <p>Total amount of todo: {todos.length}</p>
          <p>Done: {completedTodos}</p>
          <p>Pending: {pendingTodos} </p>
        </div>

        <Filter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={filteredTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </Layout>
    );
  }
}

export default App;
