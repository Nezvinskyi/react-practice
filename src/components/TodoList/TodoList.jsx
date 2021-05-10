import classNames from 'classnames';
import {connect} from 'react-redux';
import Todo from '../Todo';
import './TodoList.scss';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDelete={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => ({
	todos: state.todos.items
});
const mapDispatchToProps = dispatch => ({
	onDeleteTodo: ()=> null,
	onToggleCompleted: ()=> null
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);