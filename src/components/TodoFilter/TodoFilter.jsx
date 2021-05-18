import { connect } from 'react-redux';
import * as todoActions from '../../redux/todos/todos-actions';
import todosSelectors from '../../redux/todos/todos-selectors';
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
	value: todosSelectors.getFilter(state)
})

const mapDispatchToProps = dispatch => ({
	onChange: (event)=>dispatch(todoActions.changeFilter(event.target.value))
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);
