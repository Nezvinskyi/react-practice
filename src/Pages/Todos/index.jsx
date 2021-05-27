import { useEffect } from 'react';
import TodosForm from './TodosForm';
import TodosList from './TodosList';
import { getTodos } from '../../redux/todos/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from '../../redux/todos/selectors';

const Todos = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => dispatch(getTodos()), []);
  return (
    <div className="todos">
      <h2>Todos</h2>
      <TodosForm />
      {isLoading && <p>Loading ...</p>}
      <TodosList />
    </div>
  );
};

export default Todos;
