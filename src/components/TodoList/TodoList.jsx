import classNames from 'classnames'
import "./TodoList.scss";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
	<ul className='TodoList'>
		{todos.map(({ id, text, completed }) =>
			<li
				key={id}
				className={classNames('TodoList__item', {
					'TodoList__item--completed': completed,
				})}>
				<input
					type="checkbox"
					className="TodoList__checkbox"
					checked={completed}
					onChange={()=>onToggleCompleted(id)}
				/>
				<p className='TodoList__text'>{text}</p>
				<IconButton
					aria-label="delete"
					onClick={()=> onDeleteTodo(id)}>
						<DeleteIcon />
				</IconButton>
			</li>)}
	</ul>
)
 
export default TodoList;