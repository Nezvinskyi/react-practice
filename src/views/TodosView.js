import React, { Component } from 'react';
import Layout from '../components/Layout';
import TodoList from '../components/TodoList';
import TodoEditor from '../components/TodoEditor';
import TodoFilter from '../components/TodoFilter';
import Modal from '../components/Modal';
import IconButton from '../components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';

class TodosView extends Component {
  state = {
    showModal: false,
  };

  formSubmitHandler = data => {
    console.log(data);
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

  render() {
    const { showModal } = this.state;
    // const completedTodos = this.getCompletedTodos();
    // const pendingTodos = this.getPendingTodos();

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

        <TodoFilter />

        <TodoList />
      </Layout>
    );
  }
}

export default TodosView;
