import classNames from 'classnames';
import { connect } from 'react-redux';
import Todo from '../Todo';
import * as todosOperations from '../../redux/todos/todos-operations';
import todosSelectors from '../../redux/todos/todos-selectors';
// import { todosOperations, todosSelectors } from '../../redux/todos';
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
          onToggleCompleted={() =>
            onToggleCompleted({ id, completed: !completed })
          }
          onDelete={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => ({
  todos: todosSelectors.getFilteredTodos(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(todosOperations.deleteTodo(id)),
  onToggleCompleted: id => dispatch(todosOperations.toggleCompletedTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
