import TestComponent3 from "./TestComponent3"

const TestComponent2 = () => {
	return (
		<div className="comp-2">
			<h3>Component 2</h3>
			<TestComponent3 />
		</div>
	);
}
 
export default TestComponent2;