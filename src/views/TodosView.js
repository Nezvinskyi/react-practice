import React, { Component } from 'react';
import Layout from '../components/Layout';
import TodoList from '../components/TodoList';
import TodoEditor from '../components/TodoEditor';
import TodoFilter from '../components/TodoFilter';
import Stats from '../components/Stats';
import Modal from '../components/Modal';
import IconButton from '../components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';

class TodosView extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

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
            <TodoEditor onSave={this.toggleModal} />
          </Modal>
        )}

        <Stats />

        <TodoFilter />

        <TodoList />
      </Layout>
    );
  }
}

export default TodosView;
