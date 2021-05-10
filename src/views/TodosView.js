import React, { Component } from 'react';

import Layout from '../components/Layout';
import TodoList from '../components/TodoList';
import TodoEditor from '../components/TodoEditor';
// import TodoFilter from '../components/TodoFilter';
// import shortid from 'shortid';
import Modal from '../components/Modal';
import IconButton from '../components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';

import todosApi from '../services/todos-api';

class TodosView extends Component {
  state = {
    showModal: false,
  };

  // componentDidMount() {
  //   // const todos = localStorage.getItem('todos');
  //   // const parsedTodos = JSON.parse(todos);
  //   // if (parsedTodos) {
  //   //   this.setState({ todos: parsedTodos });
  //   // }

  //   todosApi
  //     .fetchTodos()
  //     .then(todos => {
  //       this.setState({ todos });
  //     })
  //     .catch(error => console.log(error));
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.todos !== prevState.todos) {
  //     localStorage.setItem('todos', JSON.stringify(this.state.todos));
  //   }

  //   // if (
  //   //   this.state.todos.length > prevState.todos.length &&
  //   //   prevState.todos.length !== 0
  //   // ) {
  //   //   this.toggleModal();
  //   // }
  // }

  // addTodo = text => {
  //   const todoData = {
  //     // id: shortid.generate(),
  //     text,
  //     completed: false,
  //   };

  //   todosApi.addTodo(todoData).then(todo => {
  //     this.setState(({ todos }) => ({ todos: [...todos, todo] }));

  //     this.toggleModal();
  //   });
  // };

  // deleteTodo = todoId => {
  //   todosApi.deleteTodo(todoId).then(() => {
  //     this.setState(prevState => ({
  //       todos: prevState.todos.filter(todo => todo.id !== todoId),
  //     }));
  //   });
  // };

  toggleCompleted = todoId => {
    const todo = this.state.todos.find(({ id }) => id === todoId);
    const { completed } = todo;
    const update = { completed: !completed };

    todosApi.updateTodo(todoId, update).then(updatedTodo => {
      this.setState(({ todos }) => ({
        todos: todos.map(todo =>
          todo.id === updatedTodo.id ? updatedTodo : todo,
        ),
      }));
    });
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo =>
    //     todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
    //   ),
    // }));
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  toggleTimer = () => {
    this.setState(({ showTimer }) => ({
      showTimer: !showTimer,
    }));
  };

  render() {
    const { todos, filter, showModal, showTimer } = this.state;
    // const completedTodos = this.getCompletedTodos();
    // const pendingTodos = this.getPendingTodos();
    // const filteredTodos = this.getFilteredTodos();

    return (
      <Layout>
        <h1>Todo List</h1>

        <IconButton
          type="button"
          onClick={this.toggleModal}
          aria-label="Add todo"
        >
          <AddIcon width="40" height="40" fill="white" />{' '}
        </IconButton>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}

        {/* <Form onSubmit={this.formSubmitHandler} /> */}

        {/* <div>
          <p>Total amount of todo: {todos.length}</p>
          <p>Done: {completedTodos}</p>
          <p>Pending: {pendingTodos} </p>
        </div> */}

        {/* <TodoFilter value={filter} onChange={this.changeFilter} /> */}

        <TodoList />
      </Layout>
    );
  }
}

export default TodosView;
