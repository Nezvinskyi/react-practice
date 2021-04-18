import React, { Component } from 'react';
import Layout from './components/Layout';
import TodoList from './components/TodoList';
import todos from './data/todos.json';

class App extends Component {
  state = {
    todos: todos,
  };

  render() {
    const { todos } = this.state;
    return (
      <Layout>
        <h1>Todo List</h1>
        <TodoList todos={todos} />
      </Layout>
    );
  }
}

export default App;
