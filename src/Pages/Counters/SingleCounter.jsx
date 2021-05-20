import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  counter: {
    padding: 10,
  },
  buttons: {
    display: 'flex',
  },
});

const SingleCounter = ({
  title,
  value,
  step,
  onSetStep,
  onIncrement,
  onDecrement,
}) => {
  const classes = useStyles();

  const handleChangeStep = event => onSetStep(Number(event.target.value));
  const handleDecrement = () => onDecrement(step);
  const handleIncrement = () => onIncrement(step);

  return (
    <div className={classes.counter}>
      <h4>{title}</h4>
      <label>
        <select value={step} onChange={handleChangeStep}>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <span>step</span>
      </label>
      <div className={classes.buttons}>
        <button onClick={handleDecrement}>-</button>
        <p>{value}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
      <hr />
    </div>
  );
};

export default SingleCounter;
