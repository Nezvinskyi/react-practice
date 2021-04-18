import "./TodoList.scss";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = ({ todos, onDeleteTodo }) => (
	<ul>
		{todos.map(({id, text}) =>
			<li
				key={id}
				className='TodoList__item'>
				<p>{text}</p>
				<IconButton
					aria-label="delete"
					onClick={()=> onDeleteTodo(id)}>
						<DeleteIcon />
				</IconButton>
			</li>)}
	</ul>
)
 
export default TodoList;