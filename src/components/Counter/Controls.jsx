import React from 'react';
import Button from '@material-ui/core/Button';

const Controls = ({onReset, onIncrement, onDecrement}) => (
	<div className="Counter__controls">
		<Button variant='contained' onClick={onReset}>
			Reset
		</Button>
		<Button className='Counter__button' variant='contained' onClick={onIncrement}>
			Increment by 1
		</Button>
		<Button className='Counter__button' variant='contained' onClick={onDecrement}>
			Decrement by 1
		</Button>
	</div>
);

 
export default Controls 
