import React, { Component } from 'react';
import Layout from './components/Layout';
import TodoList from './components/TodoList';
import todos from './data/todos.json';

class App extends Component {
  state = {
    todos: todos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );

    const pendingTodos = todos.reduce(
      (acc, todo) => (!todo.completed ? acc + 1 : acc),
      0,
    );

    return (
      <Layout>
        <h1>Todo List</h1>
        <div>
          <p>Total amount of todo: {todos.length}</p>
          <p>Done: {completedTodos}</p>
          <p>Pending: {pendingTodos} </p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </Layout>
    );
  }
}

export default App;
