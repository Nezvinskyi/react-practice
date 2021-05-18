import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import TodoList from '../components/TodoList';
import TodoEditor from '../components/TodoEditor';
import TodoFilter from '../components/TodoFilter';
import Stats from '../components/Stats';
import Modal from '../components/Modal';
import IconButton from '../components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';
import * as todosOperations from '../redux/todos/todos-operations';
import todosSelectors from '../redux/todos/todos-selectors';

class TodosView extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

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
        {this.props.isLoadingTodos && <h1>...loading</h1>}
        <Stats />
        <TodoFilter />
        <TodoList />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSave={this.toggleModal} />
          </Modal>
        )}
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingTodos: todosSelectors.getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(todosOperations.fetchTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosView);
