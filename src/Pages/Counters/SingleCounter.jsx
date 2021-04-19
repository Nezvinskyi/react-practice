import {useState, useEffect} from 'react';
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	counter: {
		padding: 10,
	},
	buttons: {
		display: 'flex',
	},

});

const limit = 500;

const SingleCounter = ({initialValue = 0}) => {
	const classes = useStyles();
	const [value, setValue] = useState(initialValue);
	const [step, setStep] = useState(1);
	
	const handleDecrement = () => setValue(prevState => prevState - step < 0
		? 0
		: prevState - step);
	const handleIncrement = () => setValue(prevState => prevState + step > limit
		? limit
		: prevState + step);
	
	const handleChangeStep = (e) => setStep(Number(e.target.value));
	
	useEffect(() => { console.log('value:>>', value) }, [value]);
	
	return (
		<div className={classes.counter}>
			<h4>SingleCounter</h4>
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
			<hr/>
		</div>
	);
};

 
export default SingleCounter;