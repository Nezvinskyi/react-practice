import classNames from 'classnames';
import {connect} from 'react-redux';
import Todo from '../Todo';
import * as todosOperations from '../../redux/todos/todos-operations';
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
          onToggleCompleted={() => onToggleCompleted({id, completed: !completed})}
          onDelete={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

 const getFilteredTodos = (allTodos, filter) => {

	const normalizedFilter = filter.toLowerCase();

	return allTodos.filter(({text}) =>
      text.toLowerCase().includes(normalizedFilter),
    );
  };

const mapStateToProps = ({ todos: { items, filter } }) => ({
	todos: getFilteredTodos(items, filter)
})

const mapDispatchToProps = dispatch => ({
	onDeleteTodo: (id)=> dispatch(todosOperations.deleteTodo(id)),
	onToggleCompleted: (id)=> dispatch(todosOperations.toggleCompletedTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);