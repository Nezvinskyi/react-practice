import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../redux/todos/actions';

const getTodos = id => state => state.todos.items.find(todo => todo.id === id);

const TodoItem = ({ id }) => {
  const { text, created, isDone } = useSelector(getTodos(id));
  const dispatch = useDispatch();
  const handleToggle = () => dispatch(toggleTodo(id));
  const handleDelete = () => dispatch(deleteTodo(id));

  return (
    <li>
      <button onClick={handleDelete}>x</button>
      <p>text: {text}</p>
      <p>created: {moment(created).format('DD.MM.YYYY')}</p>
      <label>
        <span>is done</span>
        <input type="checkbox" checked={isDone} onChange={handleToggle} />
      </label>
    </li>
  );
};

export default TodoItem;
