import React, { Component } from 'react';
import Layout from './components/Layout';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import TodoFilter from './components/TodoFilter';
import shortid from 'shortid';
import Modal from './components/Modal';
import Clock from './components/Clock';
// import Tabs from './components/Tabs';
// import Form from './components/Form';
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from './icons/add.svg';

// import todos from './data/todos.json';
// import items from './data/tabs.json';

class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
    showTimer: true,
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      console.log('todo field updated');
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    if (
      this.state.todos.length > prevState.todos.length &&
      prevState.todos.length !== 0
    ) {
      this.toggleModal();
    }
  }

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
    // this.toggleModal();
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
    const completedTodos = this.getCompletedTodos();
    const pendingTodos = this.getPendingTodos();
    const filteredTodos = this.getFilteredTodos();

    return (
      <Layout>
        <button type="button" onClick={this.toggleTimer}>
          Start/Stop timer
        </button>
        {showTimer && <Clock />}

        {/* <Tabs items={items} /> */}

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

        <div>
          <p>Total amount of todo: {todos.length}</p>
          <p>Done: {completedTodos}</p>
          <p>Pending: {pendingTodos} </p>
        </div>

        <TodoFilter value={filter} onChange={this.changeFilter} />

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
