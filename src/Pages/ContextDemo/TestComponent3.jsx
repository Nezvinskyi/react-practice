import {useContext} from 'react';
import Context from './contex';
const TestComponent3 = () => {
	const {value, increment} =useContext(Context)
	return (
		<div className="comp-3">
			<h4>Component 3</h4>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea dolorem eaque magnam ratione ullam hic ex distinctio quisquam molestias, accusamus eius nesciunt sit qui animi magni error vitae eveniet deleniti.
			</p>
			<p>value: {value}</p>
			<button onClick={increment}>+</button>
		</div>
	)

};
 
export default TestComponent3;