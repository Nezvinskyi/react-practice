import { connect } from 'react-redux';
import todoActions from '../../redux/todos/todos-actions';
import './TodoFilter.scss'

const TodoFilter = ({ value, onChange }) => (

	<div className="TodoFilter">
		<p className="TodoFilter__label">Filter</p>
		<input
			type="text"
			className="TodoFilter__input"
			value={value}
			onChange={onChange} />
	</div>
)

const mapStateToProps = state => ({
	value: state.todos.filter
})

const mapDispatchToProps = dispatch => ({
	onChange: (event)=>dispatch(todoActions.changeFilter(event.target.value))
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);
