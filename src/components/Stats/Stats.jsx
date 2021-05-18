import { connect } from "react-redux";
import todosSelectors from "../../redux/todos/todos-selectors";

const Stats = ({totalTodos, completedTodos, pendingTodos}) => {
	return (
		<div>
			<p>Total amount of todo: {totalTodos}</p>
			<p>Done: {completedTodos}</p>
			<p>Pending: {pendingTodos} </p>
		</div>
	);
};

const mapStateToProps = state => ({
	totalTodos: todosSelectors.getTotalTodoCount(state),
	completedTodos: todosSelectors.getCompletedTodoCount(state),
	pendingTodos: todosSelectors.getPendingTodoCount(state)
})


export default connect(mapStateToProps)(Stats);