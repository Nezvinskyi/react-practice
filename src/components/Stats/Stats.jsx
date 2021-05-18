import { connect } from 'react-redux';
import todosSelectors from '../../redux/todos/todos-selectors';

const Stats = ({ totalTodos, completedTodos, pendingTodos }) => {
  return (
    <div>
      <p>Total amount of todo: {totalTodos}</p>
      <p>Done: {completedTodos}</p>
      <p>Pending: {pendingTodos} </p>
    </div>
  );
};

// const getCompletedTodos = todos => {
//   return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
// };

// const getPendingTodos = todos => {
// 	return todos.reduce((acc, todo) => (!todo.completed ? acc + 1 : acc), 0);
// };

const mapStateToProps = state => ({
  totalTodos: state.todos.items.length,
  completedTodos: todosSelectors.getCompletedTodoCount(state),
  pendingTodos: todosSelectors.getPendingTodoCount(state),
});

export default connect(mapStateToProps)(Stats);
