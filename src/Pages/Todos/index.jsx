import { useEffect } from 'react';
import TodosForm from './TodosForm';
import TodosList from './TodosList';
import { getTodos } from '../../redux/todos/operations';
import { useDispatch } from 'react-redux';

const Todos = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getTodos()), []);
  return (
    <div className="todos">
      <h2>Todos</h2>
      <TodosForm />
      <TodosList />
    </div>
  );
};

export default Todos;
