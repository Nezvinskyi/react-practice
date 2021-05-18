import { connect } from "react-redux";

const Stats = ({totalTodos, completedTodos, pendingTodos}) => {
	return (
		<div>
			<p>Total amount of todo: {totalTodos}</p>
			<p>Done: {completedTodos}</p>
			<p>Pending: {pendingTodos} </p>
		</div>
	);
};

const getCompletedTodos = todos => {
  return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
};

const getPendingTodos = todos => {
	return todos.reduce((acc, todo) => (!todo.completed ? acc + 1 : acc), 0);
};


const mapStateToProps = state => ({
	totalTodos: state.todos.items.length,
	completedTodos: getCompletedTodos(state.todos.items),
	pendingTodos: getPendingTodos(state.todos.items)
})

export default connect(mapStateToProps)(Stats);