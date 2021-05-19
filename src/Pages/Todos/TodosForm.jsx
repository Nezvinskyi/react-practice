import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todos/actions';

const TodosForm = () => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();

    const newTodo = {
      id: Date.now(),
      text: value,
      created: Date.now(),
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setValue('');
  };

  return (
    <form className="todos-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create new todo</legend>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">+Add</button>
      </fieldset>
    </form>
  );
};

export default TodosForm;
